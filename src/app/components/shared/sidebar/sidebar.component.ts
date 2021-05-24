import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
 
})
export class SidebarComponent implements OnInit {

  public menuItems: any[]=[];
  public menu:any []=[];
  public usuario:any;
  rol = '';
  constructor( private router: Router, private auth: AuthService) {
    
    // this.menu = localStorage.getItem('menu') !== null?JSON.parse(localStorage.getItem('menu'));
  }
  
  ngOnInit() {
    const men = localStorage.getItem('menu');
    if(men !== null){
      this.menu = JSON.parse(men) || [];
    }else{
      this.menu =  [];
    }
    
    // ROUTES = this.menu;
    this.menuItems = this.menu.filter(menuItem => menuItem);
    this.usuario = localStorage.getItem('user') || {};
    if (this.usuario.cod_rol === 'R1') {
      this.rol = 'administrador';
    }
    if (this.usuario.cod_rol === 'R2') {
      this.rol = 'agente';
    }
    if (this.usuario.cod_rol === 'R3') {
      this.rol = 'funcionario';
    }
  }
logout() {
  
  this.auth.logout().subscribe(
    (resp) => {
      localStorage.clear();
      this.router.navigate(['/login']);
    },
    (error) => {
     
      localStorage.clear();
      this.router.navigate(['/login']);
    }
  );
}
}

