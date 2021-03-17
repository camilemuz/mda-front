import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  private url='http://mda-back.test/api';
  nombre: string | undefined;
  ap_paterno: string | undefined;
  ap_materno: string | undefined;
  email: string | undefined;
  password: string | undefined;
 


  form:any;
  constructor(private authServise:AuthService, http:HttpClient) {

    // this.form=formBuilder.group({
    // //   nombre: ['',[Validators.required]],
    // //   ap_paterno: ['',[Validators.required]],
    // //   ap_materno: [''],
    // //   email: ['',[Validators.required, Validators.email]],
    // //   password: ['',[Validators.required]],
    // //   password_confirma: ['',[Validators.required]],
    // // });  
    
  }
    register(){
      console.log(this.nombre);
      console.log(this.ap_paterno);
      console.log(this.ap_materno);
      console.log(this.email);
      console.log(this.password);
    } 
   
              

  ngOnInit(): void {
     }
  
     

}
