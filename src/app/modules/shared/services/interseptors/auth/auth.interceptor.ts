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
    const key = localStorage.getItem('token')! || localStorage.getItem('checkToken')!;

    if(key) {
      request = request.clone({
        headers: request.headers.set('Authorization', JSON.parse(key)),
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {

        if (error.error.statusCode === 401) {
          this.auth.logout();
        }

        return throwError(error);
      })
    )
  }
}
