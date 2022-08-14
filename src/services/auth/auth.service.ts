import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, switchMap, throwError } from 'rxjs';
import { Profile } from 'src/interfaces/profile';
import { ProfileService } from '../profile/profile.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _errorSubject: Subject<string> = new Subject<string>();
  error$: Observable<string> = this._errorSubject.asObservable();
  pattern: RegExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;

  constructor(private _profileService: ProfileService) {}

  get isAuth(): boolean {
    return localStorage.getItem('isAuth')
      ? JSON.parse(localStorage.getItem('isAuth')!)
      : false;
  }

  set isAuth(state: boolean) {
    localStorage.setItem('isAuth', JSON.stringify(state));
  }

  checkAuth(): Observable<Profile> {
    return this._profileService
      .getProfile()
      .pipe(switchMap((profile) => this._profileService.setData(profile)));
  }

  handleError(err: HttpErrorResponse): Observable<HttpErrorResponse> {
    let message: string = err.error.message;

    switch (message) {
      case 'Unauthorized':
        this._errorSubject.next("This user doesn't exist");
        break;
      default:
        this._errorSubject.next('Something went wrong. Try again');
        break;
    }

    return throwError(err);
  }

  login(username: string, password: string): Observable<any> {
    const key = 'Basic ' + btoa(username + ':' + password);

    localStorage.setItem('token', key);

    return this.checkAuth().pipe(
      catchError((err) => {
        this.isAuth = false;
        return this.handleError(err);
      })
    );
  }

  logout() {
    localStorage.clear();
  }
}
