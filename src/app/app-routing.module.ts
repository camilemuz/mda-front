
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import { PruebaComponent } from './components/prueba/prueba.component';



import { AuthGuard } from './guards/auth.guard';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { HomeComponent } from './mesa-ayuda/Pages/home/home.component';
import { UsuarioComponent } from './mesa-ayuda/Pages/usuario/usuario.component';


export const routes: Routes = [
  {path: 'login', component: LoginComponent, 
  },
  // {
  //   path: 'mda',
  //   loadChildren: () => import('./mesa-ayuda/mesa-ayuda.module').then(m => m.MesaAyudaModule),
  // },
  
  {
    path: 'crear-usuario', component:CrearUsuarioComponent
  },
  {
    path: 'usuario', component:UsuarioComponent,canActivate:[AuthGuard]
  },
  
  {
    path: 'prueba', component:PruebaComponent,
  },
  {
    path: 'home', component:HomeComponent,canActivate:[AuthGuard]
  },
  {
    path: '**', redirectTo: 'login'
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
