import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this._fb.group({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(this.auth.pattern),
      ]),
    });
  }

  onSubmit(): void {
    for (let val of Object.values(this.form.value)) {
      if (val === '') {
        return;
      }
    }

    this.auth
      .login(this.form.value.username, this.form.value.password)
      .subscribe(() => {
        this._router.navigate(['admin/edit']);
        this.auth.isAuth = true;
      });

    this.form.reset();
  }

  get usernameControl(): AbstractControl<string> | null {
    return this.form.get('username');
  }

  get passwordControl(): AbstractControl<string> | null {
    return this.form.get('password');
  }
}
