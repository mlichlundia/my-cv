import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, Observable, Subject, switchMap, throwError} from 'rxjs';
import {Profile} from 'src/interfaces/profile';
import {ProfileService} from '../profile/profile.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private errorSubject: Subject<string> = new Subject<string>();
  public error$: Observable<string> = this.errorSubject.asObservable();

  constructor(private http: HttpClient, private profileService: ProfileService) {
  }

  public get isAuth(): boolean {
    const token: string = localStorage.getItem('token')!
    return token ? !!token : false;
  }

  public setToken(): void {
    const checkToken = JSON.parse(localStorage.getItem('checkToken')!)
    localStorage.removeItem('checkToken')
    localStorage.setItem('token', JSON.stringify(checkToken))
  }

  private checkAuth(): Observable<Profile> {
    return this.profileService
      .getProfile()
      .pipe(switchMap((profile: Profile) => this.profileService.setProfile(profile)));
  }

  private handleError(err: HttpErrorResponse): Observable<HttpErrorResponse> {
    let message: string = err.error.message;

    switch (message) {
      case 'Unauthorized':
        this.errorSubject.next("This user doesn't exist");
        break;
      default:
        this.errorSubject.next('Something went wrong. Try again');
        break;
    }

    return throwError(err);
  }

  public login(username: string, password: string): Observable<any> {
    const key = 'Basic ' + btoa(username + ':' + password);

    localStorage.setItem('checkToken', JSON.stringify(key));

    return this.checkAuth().pipe(
      catchError((err) => {
        return this.handleError(err);
      })
    );
  }

  public logout(): void {
    localStorage.clear();
  }
}
