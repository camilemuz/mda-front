import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url='http://mda-back.test/api';
  
  
  
  
  constructor(private http: HttpClient) { }
    

  public signIn(userData:any){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }
  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }
  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }

 login (email:string,password:string){
      return this.http.post(this.url + '/login', {
        email,
        password
      });
  }


     
  
}

  
