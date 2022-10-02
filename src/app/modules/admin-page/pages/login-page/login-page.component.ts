import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PASSWORD, USERNAME} from "../../../shared/constants/reg-exps";
import {AuthService} from "../../../shared/services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  public form!: FormGroup
  public hide: boolean= true

  constructor(private fb: FormBuilder,private router: Router, public auth: AuthService) {}

  ngOnInit(): void {
    this.initForm()
    this.auth.isAuth && this.router.navigate(['admin/edit'])
  }

  public onSubmit() {
    if(this.form.invalid) {
      return
    }

    this.auth.login(this.username?.value, this.password?.value).subscribe(() => {
      this.auth.setToken()
      this.router.navigate(['/admin'])
    })
  }

  public get username() {
    return this.form.get('username')
  }

  public get password() {
    return this.form.get('password')
  }

  public getUsernameError(): string {
    if(!this.username?.errors) {
      return ''
    }

    if(this.username?.errors['required']) {
      return 'Username is required'
    }

    if(this.username?.errors['minlength']) {
      return `Username should contain not less than ${this.username.errors['minlength']['requiredLength']} symbols`
    }

    if(this.username?.errors['maxlength']) {
      return `Username should contain not more than ${this.username.errors['maxlength']['requiredLength']} symbols`
    }

    if(this.username?.errors['pattern']) {
      return `Username should contain only latin letter. Example: JohnSmith`
    }

    return 'Username is invalid'
  }

  public getPasswordError(): string {
    if(!this.password?.errors) {
      return ''
    }

    if(this.password?.errors['required']) {
      return 'Password is required'
    }

    if(this.password?.errors['minlength']) {
      return `Password should contain at least ${this.password.errors['minlength']['requiredLength']} symbols`
    }

    if(this.password?.errors['maxlength']) {
      return `Password should contain not more than ${this.password.errors['maxlength']['requiredLength']} symbols`
    }

    if(this.password?.errors['pattern']) {
      return `Password should contain at least 1 special symbol, 1 number, 1 uppercase letter. Example: 1Username!`
    }

    return 'Password is invalid'
  }

  private initForm() {
    this.form = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.pattern(USERNAME), Validators.minLength(3), Validators.maxLength(20)]),
      password: new FormControl('', [Validators.required, Validators.pattern(PASSWORD), Validators.minLength(3), Validators.maxLength(20)])
    })
  }
}
