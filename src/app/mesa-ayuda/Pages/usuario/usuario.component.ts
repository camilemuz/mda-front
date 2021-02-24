import { Component, OnInit, ViewChild } from '@angular/core';
import { CrearUsuarioComponent } from '../crear-usuario/crear-usuario.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @ViewChild(CrearUsuarioComponent) hijo: CrearUsuarioComponent | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
