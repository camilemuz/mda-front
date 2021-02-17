import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
 form:any;
  //emailCrl= new FormControl('',[Validators.required, Validators.email]);
 //passwordCrl= new FormControl('',[Validators.required, Validators.email]);

  constructor ( private authService:AuthService,
                private formBuilder: FormBuilder){

    this.form = formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]]
    });
     
                              
   
  }
 

  ngOnInit(){
     
  }

  submit() {
    console.log("entra")
    if (this.form.valid) {
      this.login(this.form.get('email').value,this.form.get('password').value);
      console.log(this.form.value)
    }    
  }
  
/*getEmail(event:Event){
  event.preventDefault();
  console.log(this.emailCrl.value);
}
getPassword(event:Event){
    event.preventDefault();
    console.log(this.passwordCrl.value); */


  
  login(email: string,password: string): void{

    this.authService.login(email,password)
      .subscribe((data:any) => {

        console.log("Logeado!!!");
        console.log(data);
      }); 
  }
      
  

}


