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

  onSubmit(data: NgForm): void {
    this.auth.login(data.value.username, data.value.password);
  }
}
