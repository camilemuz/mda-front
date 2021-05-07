import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import {finalize} from 'rxjs/operators';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  private count = 0;
  constructor(private loaderService: LoaderService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token');
    let headers = null;

    if (token) {
      headers = new HttpHeaders({
        'Authorization' : `Bearer ${token}`,
      });
    } else {
      headers = new HttpHeaders({
    });
    }
    const requestChange = req.clone({headers});
    // console.log(requestChange);
    if (this.count === 0) {
      this.loaderService.isLoading.next(true);
    }
    this.count ++;
    return next.handle(requestChange).pipe(finalize(() => {
      this.count--;
      if (this.count === 0) {
        this.loaderService.isLoading.next(false);
      }
    }));
  }
}
