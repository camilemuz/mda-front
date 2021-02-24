import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from '../mesa-ayuda/Pages/home/home.component';
import {Routes, RouterModule} from '@angular/router';
import { PruebaComponent } from '../components/prueba/prueba.component';
import { AuthGuard } from '../guards/auth.guard';
import { UsuarioComponent } from './Pages/usuario/usuario.component';



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
    
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MesaAyudaRoutingModule { }
