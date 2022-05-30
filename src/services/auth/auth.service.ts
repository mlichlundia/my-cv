import { Injectable } from '@angular/core';
import { User } from 'src/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(user: User): void {
    const key = 'Basic ' + btoa(user.name + ':' + user.password);
    localStorage.setItem('token', key);
  }

  logout() {}
}
