import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from '../mesa-ayuda/Pages/home/home.component';
import {Routes, RouterModule} from '@angular/router';
import { PruebaComponent } from '../components/prueba/prueba.component';
import { AuthGuard } from '../guards/auth.guard';
import { UsuarioComponent } from './Pages/usuario/usuario.component';
import { CrearUsuarioComponent } from './Pages/crear-usuario/crear-usuario.component';



export const routes: Routes = [
  
 
  {
    path: 'home', component: HomeComponent,canActivate:[AuthGuard]  
  },
    {
      path: 'prueba', component:PruebaComponent,canActivate:[AuthGuard]
    },
    {
      path: 'usuario', component:UsuarioComponent,canActivate:[AuthGuard]
    },
    {
      path: 'crear-usuario', component:CrearUsuarioComponent,canActivate:[AuthGuard]
    },

    
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MesaAyudaRoutingModule { }
