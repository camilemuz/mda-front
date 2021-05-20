import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class  ErrorInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService, private router: Router) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(err => {
      console.log('eerrrorinterceptor', err);
      if ([401, 403, 500].indexOf(err.status) !== -1) {
        // this.auth.logout().subscribe(
        //   (resp) => {
            localStorage.clear();
            //this.router.navigate(['/home/login'])
            this.router.navigate(['/login']);
          // },
          // (error) => {
          //   //this.router.navigate(['/home/login'])
          //   localStorage.clear();
          //   this.router.navigate(['/login']);
          // }
        // );
        // location.reload(true);
      }
      if ([422].indexOf(err.status) !== -1) {
        alert(err.error.msg);
      }
      const error = err.error.message || err.statusText;
      return throwError(error);
    }))
  }
}
