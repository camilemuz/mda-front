import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { AuthService } from 'src/app/services/auth.service';
import { CargoRestService } from 'src/app/services/cargo-rest.service';
import { UserRestService } from 'src/app/services/user-rest.service';



@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  
    registerForm:any;
    cargoList:any;
    private url='http://mda-back.test/api';

  constructor(private auth:AuthService, private userRest:UserRestService,private cargoRest:CargoRestService, http:HttpClient, private formBuilder: FormBuilder,  private router: Router, private route: ActivatedRoute) {
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
          'id_cargo': new FormControl(null, [Validators.required]),
          'unidad': new FormControl(null,[]),         
          'rol': new FormControl(null, [Validators.required]),          
          'password': new FormControl(null, [Validators.required, Validators.minLength(5)]), 
          //  'confirma': new FormControl(null, [Validators.required]),         
        }
        ); }

       
        


      get nombre() { return this.registerForm.get('nombre'); }
      get ap_paterno() { return this.registerForm.get('ap_paterno'); }
      get ap_materno() { return this.registerForm.get('ap_materno'); }
      get unidad() { return this.registerForm.get('unidad'); }
      get email() { return this.registerForm.get('email'); }
      get rol() { return this.registerForm.get('rol'); }
      get id_cargo() { return this.registerForm.get('id_cargo'); }
      get password() { return this.registerForm.get('password'); }
      // get confirma() { return this.registerForm.get('confirma'); }

      Register() {
        // console.log("desde controller",this.registerForm);
        this.auth.register(this.registerForm).subscribe(() => {      
          this.router.navigate(['home/login']);
    
        })
        
      // alert ('Usuario registrado')
      

       }
      //  checarSiSonIguales(): boolean {
      //   return this.registerForm.hasError('noSonIguales') &&
      //     this.registerForm.get('password').dirty &&
      //     this.registerForm.get('confirma').dirty;
      // }


  
}


// export const validarQueSeanIguales: ValidatorFn = (control: FormGroup): ValidationErrors| null => {
//   const password = control.get('password');
//   const confirmarPassword = control.get('confirma');
  
//   if(!password||!confirmarPassword){
//     return null;
//   }



// return password === confirmarPassword ? null: {checarSiSonIguales: true};
// };

