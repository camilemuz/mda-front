import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url='http://mda-back.test/api';
  private userToken: string | null | undefined;
  
  
  
  constructor(private http: HttpClient, private router: Router) { 
    
  }
    
  public isLoggedIn() : boolean{
    return this.getToken() !== null;
  }

  public logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }


 login (email:string,password:string){
      return this.http.post(this.url + '/login', {
        email,
        password
      })
  }

  setUser(user:any): void{
    let user_string= JSON.stringify(user);
    localStorage.setItem('currentUser',user_string);
  }

  setToken(token:string):void{
    localStorage.setItem('token', token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

 
  getCurrentUser(){
    let user_string=localStorage.getItem('currentUser');
    let user= JSON.parse(user_string);
    return user;
    }
    
  


// private guardarToken  (idToken:string): void{
// this.userToken=idToken;
// localStorage.setItem('token',idToken);
// }

// leerToken(){

//   if(localStorage.getItem('token')){
//     this.userToken=localStorage.getItem('token');
//     } else{
//       this.userToken='';
//     }

//     return this.userToken;
// }
  //  
  register(form: any) {
    console.log("desde auth",form);
    return this.http.post(this.url + '/user', form.value);
    
  }

recuperarTodos(){
  return this.http.get(this.url+'/user');
}
  
}
  

  
  


