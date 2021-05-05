import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  [x: string]: any;
  private url='http://mda-back.test/api';
    registerForm:any;
    
  constructor(private auth:AuthService,
     http:HttpClient,
    private formBuilder: FormBuilder,
    private route: Router,
    private router: ActivatedRoute) {

 

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
          'rol': new FormControl(null, [Validators.required]),
          'password': new FormControl(null, [Validators.required, Validators.minLength(5)]), 
          // 'confirma': new FormControl(null, [RxwebValidators.compare({fieldName:'password'})]),         
        },
        ); }

       
        


      get nombre() { return this.registerForm.get('nombre'); }
      get ap_paterno() { return this.registerForm.get('ap_paterno'); }
      get ap_materno() { return this.registerForm.get('ap_materno'); }
      get email() { return this.registerForm.get('email'); }
      get rol() { return this.registerForm.get('rol'); }
      get password() { return this.registerForm.get('password'); }
      // get confirma() { return this.registerForm.get('confirma'); }

      Register() {
        console.log("desde controller",this.registerForm);
        this.auth.register(this.registerForm).subscribe(response => {
          
          
          this.route.navigate(['home/login']);
    
        })
        
      // alert ('Usuario registrado')
    

  }
  
}

