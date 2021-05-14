import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CargoRestService } from 'src/app/services/cargo-rest.service';
import { UserRestService } from 'src/app/services/user-rest.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  // [x: string]: any;
    registerForm:any;
    userList:any;
    cargoList:any;
    private url='http://mda-back.test/api';

  constructor(private auth:AuthService,
     private route: Router, private userRest:UserRestService,  http:HttpClient, private cargoRest:CargoRestService) {

      http.get(this.url+'/cargo').subscribe((data)=>{
        console.log(data);
        this.cargoList=data;
      });

    // this.form=formBuilder.group({
    //   nombre: ['',[Validators.required]],
    //   ap_paterno: ['',[Validators.required]],
    //   ap_materno: [''],
    //   email: ['',[Validators.required, Validators.email]],
    //   password: ['',[Validators.required]],
    //   password_confirma: ['',[Validators.required]],
    // });  
    
}
    
      ngOnInit(): void {
        this.registerForm = new FormGroup({
          'nombre': new FormControl(null, [Validators.required, Validators.minLength(3)]),
          'ap_paterno': new FormControl(null, [Validators.required, Validators.minLength(3)]),
          'ap_materno': new FormControl(null,[]),          
          'email': new FormControl(null, [Validators.required, Validators.email]),
          'password': new FormControl(null, [Validators.required, Validators.minLength(5)]),
          'cargo': new FormControl(null,[Validators.required]),
          'unidad': new FormControl(null,[Validators.required]),
          'rol': new FormControl(null, [Validators.required]),
           
          //  'confirma': new FormControl(null, [Validators.required]),         
        }
        ); }

  
      get nombre() { return this.registerForm.get('nombre'); }
      get ap_paterno() { return this.registerForm.get('ap_paterno'); }
      get ap_materno() { return this.registerForm.get('ap_materno'); }
      get email() { return this.registerForm.get('email'); }
      get password() { return this.registerForm.get('password'); }
      get cargo() { return this.registerForm.get('cargo'); }
      get unidad() { return this.registerForm.get('unidad'); }
      get rol() { return this.registerForm.get('rol'); }
      
      // get confirma() { return this.registerForm.get('confirma'); }

      Register() {
       // console.log("desde controller",this.registerForm);
        this.auth.register(this.registerForm).subscribe(() => {      
          this.route.navigate(['home/login']);
    
        })
        
      // alert ('Usuario registrado')
      

       }

}




