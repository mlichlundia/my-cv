import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse,
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {AuthService} from "../../auth/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const key = JSON.parse(localStorage.getItem('token')!) || JSON.parse(localStorage.getItem('checkToken')!);
console.log(key)
    if(key) {
      request = request.clone({
        headers: request.headers.set('Authorization', key),
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error)

        if (error.error.statusCode === 401) {
          this.auth.logout();
        }

        return throwError(error);
      })
    )
  }
}
