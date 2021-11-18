import { SessionStorageService } from './../services/session-storage.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private sessionStorage: SessionStorageService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.sessionStorage.getItem("token");
    if (token)
      request = request.clone({
        setHeaders: {
          authorization: `Bearer ${token}`
        }
      })
    return next.handle(request);
  }
}
