import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { GlobalVariables } from 'src/constants';
import { Profile } from 'src/interfaces/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  profileApi: string = GlobalVariables.apiURL + 'profile';

  constructor(private http: HttpClient) {}

  getProfile() {
    return this.http
      .get<Profile>(this.profileApi)
      .pipe(retry(3), catchError(this.errorHandler));
  }

  setName(name: string) {
    //to fix: change req object
    const body = { name, location: 'qwer', contacts: [] };
    return this.http
      .post<Profile>(this.profileApi, body)
      .pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error(error.error);
    } else {
      `Backend returned code: ${error.status}, body of the error: ${error.error}`;
    }
    return throwError(() => new Error());
  }
}
