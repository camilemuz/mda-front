import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ComuRestService } from 'src/app/services/comu-rest.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registerForm:any;
  cargoList:any[]=[];
  rolList:any[]=[];
  private url='http://mda-back.test/api';

constructor(
  private comunRest: ComuRestService,
  private auth:AuthService, 
  private router: Router) {
  comunRest.get('/cargo').subscribe((data)=>{
    console.log(data);
    this.cargoList=data.data;
  });
  comunRest.get('/rol').subscribe((data)=>{
    console.log(data);
    this.rolList=data.data;
  });


}
  
    ngOnInit(): void {
      this.registerForm = new FormGroup({
        'nombre': new FormControl(null, [Validators.required, Validators.minLength(3)]),
        'ap_paterno': new FormControl(null, [Validators.required, Validators.minLength(3)]),
        'ap_materno': new FormControl(null,[]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'password': new FormControl(null, [Validators.required, Validators.minLength(5)]),
        'id_cargo': new FormControl(null, [Validators.required]),         
        'id_rol': new FormControl(null, [Validators.required]),          
        //  'confirma': new FormControl(null, [Validators.required]),         
      }
      ); }

     
      


    get nombre() { return this.registerForm.get('nombre'); }
    get ap_paterno() { return this.registerForm.get('ap_paterno'); }
    get ap_materno() { return this.registerForm.get('ap_materno'); }
    get unidad() { return this.registerForm.get('unidad'); }
    get email() { return this.registerForm.get('email'); }
    get password() { return this.registerForm.get('password'); }
    get id_rol() { return this.registerForm.get('id_rol'); }
    get id_cargo() { return this.registerForm.get('id_cargo'); }
    
    // get confirma() { return this.registerForm.get('confirma'); }

    Register() {
      // console.log("desde controller",this.registerForm);
      this.auth.register1(this.registerForm).subscribe(() => {      
        this.router.navigate(['login']);
        alert ('Usuario registrado')
      })
      
    // alert ('Usuario registrado')
    

     }


    }


