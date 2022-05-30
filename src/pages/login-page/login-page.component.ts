import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/services/auth/auth.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  template = {
    name: 'login',
    usernameInput: {
      label: 'username',
      type: 'text',
      min: 3,
    },
    passwordInput: { label: 'password', type: 'password', min: 3 },
    button: 'submit',
  };

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  onChange(value: any) {
    console.log(value);
  }

  onSubmit(data: NgForm): void {
    const user: User = {
      name: data.value.username,
      password: data.value.password,
    };

    this.auth.login(user);
  }
}
