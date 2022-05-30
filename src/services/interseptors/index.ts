import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterseptor } from './auth/auth.interceptor';

export const httpIntrseptorProvider = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterseptor, multi: true },
];
