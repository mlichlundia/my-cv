import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterseptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const key = localStorage.getItem('token');
    if (key) {
      const newRequest = request.clone({
        headers: request.headers.set('Authorization', key),
      });

      return next.handle(newRequest);
    }
    return next.handle(request);
  }
}
