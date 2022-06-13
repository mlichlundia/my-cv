import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(username: string, password: string): void {
    const key = 'Basic ' + btoa(username + ':' + password);
    localStorage.setItem('token', key);
  }

  logout() {}
}
