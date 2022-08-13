import { Injectable } from '@angular/core';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { Profile } from 'src/interfaces/profile';
import { ProfileService } from '../profile/profile.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  pattern: RegExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
  isAuth: boolean = true;

  constructor(private _profileService: ProfileService) {}

  get usernamePattern(): RegExp {
    return this.pattern;
  }

  setAuth(state: boolean) {
    this.isAuth = state;
  }

  checkAuth(): Observable<Profile> {
    return this._profileService.getProfile().pipe(
      switchMap((profile) => this._profileService.setData(profile)),
      catchError((err) => {
        this.setAuth(false);
        return throwError(err);
      })
    );
  }

  login(username: string, password: string): Observable<Profile> {
    const key = 'Basic ' + btoa(username + ':' + password);

    localStorage.setItem('token', key);

    return this.checkAuth();
  }

  logout() {}
}
