import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  pattern: RegExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;

  get usernamePattern(): RegExp {
    return this.pattern;
  }

  login(username: string, password: string): void {
    const key = 'Basic ' + btoa(username + ':' + password);
    localStorage.setItem('token', key);
  }

  logout() {}
}
