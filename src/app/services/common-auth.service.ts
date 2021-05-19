import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonAuthService {
  private url='http://mda-back.test/api';
  loggedIn = false;
  // roleAs: string;
  constructor(private http: HttpClient) { }

  registerUser(form: any) {
    // console.log(form);
    return this.http.post(this.url + '/registro', form.value);
    // return this.http.post('/api/auth/register', form.value);
  }

   isAuthonticated() {
  	const promise = new Promise(
  		(resolve, reject) => {
  			setTimeout(() => {
          let t = localStorage.getItem('token');
          if (t) {
            this.loggedIn = true;
            resolve(this.loggedIn);
          } else {
            this.loggedIn = false;
            reject();
          }
        },800);
  		});
  	return promise;
  }

  logIn(form: any): Observable<any> {
    return this.http.post(this.url + '/login', form.value);
  }

  logout(): Observable<any> {
    return this.http.post(this.url + '/logout', {});
    //return result;
  }
  // forgot(email: string): Observable<any> {
  //   return this.http.post(this.url + '/auth/recuperar-password', {email: email});
  // }
  // recuperapassword(form: any): Observable<any> {
  //   // let headers = new HttpHeaders();
  //   // headers = headers.append('Authorization', 'Bearer' + form.value.token_reset);
  //   return this.http.post(this.url + '/auth/reset-password',  form.value, {headers: new HttpHeaders({'Authorization': 'Bearer ' + form.value.token_reset})});
  // }
  // getRole() {
  //   this.roleAs = localStorage.getItem('ROLE');
  //   return this.roleAs;
  // }
}
