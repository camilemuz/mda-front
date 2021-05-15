
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/auth/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { CrearUsuarioComponent } from './components/admin/usuarios/crear-usuario/crear-usuario.component';
import { HomeComponent } from './components/Pages/home/home.component';
import { EditarUsuarioComponent } from './components/admin/usuarios/editar-usuario/editar-usuario.component';
import { ListarUsuarioComponent } from './components/admin/usuarios/listar-usuario/listar-usuario.component';
import { RegistroComponent } from './components/Pages/registro/registro.component';


export const routes: Routes = [
  {
    path: 'login', component: LoginComponent, 
  },
  {
    path: 'registro', component: RegistroComponent, 
  },
   {
    path: 'listar-usuario', component:ListarUsuarioComponent,canActivate:[AuthGuard],
   },
 
  {
    path: 'editar-usuario/:id', component:EditarUsuarioComponent,canActivate:[AuthGuard]
   },
  { 
    path: 'crear-usuario', component:CrearUsuarioComponent,canActivate:[AuthGuard]
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
