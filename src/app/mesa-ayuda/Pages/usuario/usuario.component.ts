import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { RegistroService } from 'src/app/services/registro.service';
import { CrearUsuarioComponent } from '../crear-usuario/crear-usuario.component';
import { Registro } from 'src/app/components/Interfaces/registro';

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