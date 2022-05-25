import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  constructor() {}

  ngOnInit(): void {}

  onChange(value: any) {
    console.log(value);
  }

  onSubmit(data: NgForm) {
    console.log(data);
  }
}
