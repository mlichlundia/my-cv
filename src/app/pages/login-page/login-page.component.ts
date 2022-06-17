import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    for (let val of Object.values(form.value)) {
      if (val === '') {
        return;
      }
    }

    this.auth.login(form.value.username, form.value.password);
    form.reset();
  }
}
