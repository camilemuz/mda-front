import { Component, OnInit,  ViewChild, ElementRef } from '@angular/core';
// import { ROUTES } from '../sidebar/sidebar.component';
import { Router } from '@angular/router';
import { Location} from '@angular/common';
import { AuthService } from '../services/auth.service';

// import { HttpService } from '../../../services/HttpService';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 
    

    private toggleButton:any;
 
    public usuario = null;
    public isCollapsed = true;
    @ViewChild('navbar-cmp', {static: false}) button: any;

    constructor(
     
       private router: Router,
    
       private auth: AuthService) {
       
    }

    ngOnInit() {
        const user:any = localStorage.getItem('user');
        const usuario = JSON.parse(user);
        this.usuario = usuario;
       
    }

    logout() {
      // localStorage.clear();
      // this.router.navigate(['/home/login']);
      const token = localStorage.getItem('token');
      this.auth.logout().subscribe(
        (resp) => {
          localStorage.clear();
          this.router.navigate(['/home/login']);
        },
        (error) => {
          //this.router.navigate(['/home/login'])
          localStorage.clear();
          this.router.navigate(['/home/login']);
        }
      );
    }

   
      collapse() {
        this.isCollapsed = !this.isCollapsed;
        const navbar = document.getElementsByTagName('nav')[0];
        if (!this.isCollapsed) {
          navbar.classList.remove('navbar-transparent');
          navbar.classList.add('bg-white');
        } else {
          navbar.classList.add('navbar-transparent');
          navbar.classList.remove('bg-white');
        }

      }

}