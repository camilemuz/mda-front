import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { CrearUsuarioComponent } from '../../../components/crear-usuario/crear-usuario.component';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  url='http://mda-back.test/api';
  
  constructor(){
    
  
 
}
  ngOnInit(): void {
    
  }

} 