import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonAuthService {
  
  loggedIn = false;
  // roleAs: string;
  private url='http://mda-back.test/api';
  constructor(private http: HttpClient) { }

  registerUser(form: any) {
    console.log(form);
    return this.http.post(this.url + '/user', form.value);
    // return this.http.post('/api/auth/register', form.value);
  }

  

  // logIn(form: any): Observable<any> {
  //   return this.http.post(this.url + '/login', form.value);
  // }

  // logout(): Observable<any> {
  //   return this.http.post(this.url + '/logout', {});
  //   //return result;
  // }
  // forgot(email: string): Observable<any> {
  //   return this.http.post(this.url + '/auth/recuperar-password', {email: email});
  // }
  // recuperapassword(form: any): Observable<any> {
  //   // let headers = new HttpHeaders();
  //   // headers = headers.append('Authorization', 'Bearer' + form.value.token_reset);
  //   return this.http.post(this.url + '/auth/reset-password',  form.value, {headers: new HttpHeaders({'Authorization': 'Bearer ' + form.value.token_reset})});
  // }
  // // getRole() {
  // //   this.roleAs = localStorage.getItem('ROLE');
  // //   return this.roleAs;
  // // }
}
