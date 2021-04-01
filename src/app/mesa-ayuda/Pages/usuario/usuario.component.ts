import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


import { CrearUsuarioComponent } from '../../../components/crear-usuario/crear-usuario.component';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  private url='http://mda-back.test/api';
  users=null;
  user={
    nombre:null,
    ap_paterno:null,
    email:null
  }


  constructor(private auth:AuthService,
    http:HttpClient,
   private formBuilder: FormBuilder,
   private route: Router,
   private router: ActivatedRoute){
    http.get(this.url+'/user').subscribe((data)=>{
      console.log(data);
    });
  
 
}
  ngOnInit(): void {
    this.recuperarTodos();
  }
  recuperarTodos(){
    this.auth.recuperarTodos().subscribe(result => this.user=result);
  }
  
} 

export interface User{
  id?: number;
  nombre: string;
  ap_paterno: string;
  ap_materno: string;
  email: string;
}