import { TestBed } from '@angular/core/testing';

import { AuthInterseptor } from './auth.interceptor';

describe('AuthInterseptorInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [AuthInterseptor],
    })
  );

  it('should be created', () => {
    const interceptor: AuthInterseptor = TestBed.inject(AuthInterseptor);
    expect(interceptor).toBeTruthy();
  });
});
