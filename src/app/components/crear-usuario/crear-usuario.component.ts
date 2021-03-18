import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
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
  constructor(private authService:AuthService, http:HttpClient, private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {

    this.form=formBuilder.group({
      nombre: ['',[Validators.required]],
      ap_paterno: ['',[Validators.required]],
      ap_materno: [''],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]],
      password_confirma: ['',[Validators.required]],
    });  
    
}
    

    Register(){
      if(this.form.valid){
        this.form.get('nombre').value,
         this.form.get ('ap_paterno').value,
         this.form.get ('ap_materno').value,
         this.form.get ('email').value,
         this.form.get ('password').value;

         console.log(this.form.value);
         console.log('jala');
         
        }
        
      // console.log(this.nombre);
      // console.log(this.ap_paterno);
      // console.log(this.ap_materno);
      // console.log(this.email);
      // console.log(this.password);
    } 
   
              

  ngOnInit(): void {
     }
  
     

}
