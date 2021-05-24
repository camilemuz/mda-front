import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';


const administrador: any[] = [
 
  {
    path: '/admin/usuarios', title: 'Usuarios',  class: '',
    childMenu: null
  },
  {
    path: '/tickets', title: 'Tickets',  class: '',
    childMenu: null
  },
  {
    path: '/admin/configuracion', title: 'Configuracion',  class: '',
    childMenu: null
  },
  {
    path: '/admin/dashboard', title: 'Dashboard',  class: '',
    childMenu: null
  },
 
];
const agente: any[] = [
 
  {
    path: '/Pages', title: 'Home',  class: '',
    childMenu: null
  },
  {
    path: '/tickets', title: 'tickets',  class: '',
    childMenu: null
  },

];
const funcionario: any[] = [
 
  {
    path: '/Pages/home', title: 'Home',  class: '',
    childMenu: null
  },
  {
    path: '/tickets/listar-ticket', title: 'Listar Ticket',  class: '',
    childMenu: null
  },
  {
    path: '/tickets/editar-ticket', title: 'Editar Ticket',  class: '',
    childMenu: null
  },

];



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginForm:any= FormGroup;
  serverErrors = [];
  showPassword = true;
  returnUrl: string | undefined;
  //emailCrl= new FormControl('',[Validators.required, Validators.email]);
 //passwordCrl= new FormControl('',[Validators.required, Validators.email]);

  constructor ( private authService:AuthService,
                private formBuilder: FormBuilder,
                private router: Router,
                private route: ActivatedRoute){

    // this.form = formBuilder.group({
    //   email: ['',[Validators.required, Validators.email]],
    //   password: ['',[Validators.required]]
    // });
    // console.log(this.authService.isLoggedIn());
    // if(this.authService.isLoggedIn()){
    //   console.log("esta logueado");
    //   //this.router.navigate(['/prueba']);
    //   this.router.navigate(['/home']);
      
    // }    
  }
 

  ngOnInit(){
    this.loginForm = new FormGroup({
      'email' : new FormControl(null, [Validators.required, Validators.email]),
    
      'password' : new FormControl(null, [Validators.required])
    });
   
  }

  // submit() {
  //   if (this.form.valid) {
  //     this.login(this.form.get('email').value,this.form.get('password').value);
  //     console.log(this.form.value);
  //   }    
  // }
  

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }


  
  // login(email: string,password: string): void{

  //   this.authService.login(email,password)
  //     .subscribe((data:any) => {
  //       this.authService.setToken(data.token);
  //       this.authService.setUser(data.user);
  //       this.authService.getCurrentUser();
  //       // localStorage.setItem('token','id');
  //       // this.router.navigateByUrl('/prueba');
  //       this.router.navigate(['/home'], { relativeTo: this.route });
  //       alert("Bienvenid@");
  //     },
  //     (error)=>{
  //     this.serverErrors=error.error;
  //     if  (error=== 'Unauthorized'){
  //       error.alert("Correo o password invalido");
  //     }
  //     localStorage.removeItem('token');
     
  //     }
    
  //     ); 
      
  // }
  login() {
    let menu: any[] = [];
    this.authService.logIn(this.loginForm).subscribe(
      (data:any) => {
        this.authService.setToken(data.token);
        this.authService.setUser(data.user);
        this.authService.getCurrentUser();
        
        if (data.user.id_rol === '1') {
          menu = administrador;
        }
        if (data.user.id_rol=== '2') {
          menu = agente;
        }
        if (data.user.id_rol === '3') {
          menu = funcionario;
        }
        localStorage.setItem('menu', JSON.stringify(menu));
        localStorage.removeItem('user')
        localStorage.setItem('user', JSON.stringify(data.user));
        // this.router.navigate(['/dashboard']);
        if (data.user.id_rol === '1') {
          this.router.navigate(['listar-usuario']);
        }
        if (data.user.id_rol === '2') {
          this.router.navigate(['/listar-tickets']);
        }
        if (data.user.id_rol === '3') {
          this.router.navigate(['/home']);
        }
        alert("Bienvenid@");
      },
      (error) => {
        this.serverErrors = error.error;
        
        if (error === 'Unauthorized') {
          
          error.alert("Correo o password invalido");
        }
        localStorage.removeItem('token');
        
      }
    );
  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

}


