
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/auth/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { CrearUsuarioComponent } from './components/admin/usuarios/crear-usuario/crear-usuario.component';
import { HomeComponent } from './components/Pages/home/home.component';
import { EditarUsuarioComponent } from './components/admin/usuarios/editar-usuario/editar-usuario.component';
import { ListarUsuarioComponent } from './components/admin/usuarios/listar-usuario/listar-usuario.component';
import { RegistroComponent } from './components/Pages/registro/registro.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ConfiguracionComponent } from './components/admin/configuracion/configuracion/configuracion.component';
import { ListarCategoriaComponent } from './components/admin/configuracion/catalogo/categoria/listar-categoria/listar-categoria.component';
import { EditarCategoriaComponent } from './components/admin/configuracion/catalogo/categoria/editar-categoria/editar-categoria.component';
import { CrearCategoriaComponent } from './components/admin/configuracion/catalogo/categoria/crear-categoria/crear-categoria.component';
import { ListarTipoReqComponent } from './components/admin/configuracion/catalogo/sub-categoria/listar-tipo-req/listar-tipo-req.component';
import { CrearTipoReqComponent } from './components/admin/configuracion/catalogo/sub-categoria/crear-tipo-req/crear-tipo-req.component';
import { EditarTipoReqComponent } from './components/admin/configuracion/catalogo/sub-categoria/editar-tipo-req/editar-tipo-req.component';
import { ListarMunicipioComponent } from './components/admin/configuracion/lugar/municipio/listar-municipio/listar-municipio.component';
import { EditarMunicipioComponent } from './components/admin/configuracion/lugar/municipio/editar-municipio/editar-municipio.component';
import { CrearMunicipioComponent } from './components/admin/configuracion/lugar/municipio/crear-municipio/crear-municipio.component';
import { ListarSucursalComponent } from './components/admin/configuracion/lugar/sucursal/listar-sucursal/listar-sucursal.component';
import { CrearSucursalComponent } from './components/admin/configuracion/lugar/sucursal/crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './components/admin/configuracion/lugar/sucursal/editar-sucursal/editar-sucursal.component';
import { ListarDptoComponent } from './components/admin/configuracion/lugar/departamento/listar-dpto/listar-dpto.component';
import { CrearDptoComponent } from './components/admin/configuracion/lugar/departamento/crear-dpto/crear-dpto.component';
import { EditarDptoComponent } from './components/admin/configuracion/lugar/departamento/editar-dpto/editar-dpto.component';
import { ListarTicketComponent } from './components/tickets/listar-ticket/listar-ticket.component';
import { EditarTicketComponent } from './components/tickets/editar-ticket/editar-ticket.component';
import { CrearTicketComponent } from './components/tickets/crear-ticket/crear-ticket.component';


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
    path: 'dashboard', component:DashboardComponent,canActivate:[AuthGuard]
  },
  {
    path: 'configuracion', component:ConfiguracionComponent,canActivate:[AuthGuard]
  },
  //categoria
  {
    path: 'listar-categoria', component:ListarCategoriaComponent,canActivate:[AuthGuard],
   },
 
  {
    path: 'editar-categoria/:id', component:EditarCategoriaComponent,canActivate:[AuthGuard]
   },
  { 
    path: 'crear-categoria', component:CrearCategoriaComponent,canActivate:[AuthGuard]
  },
  //tipo-requerimiento
  {
    path: 'listar-tipo-req', component:ListarTipoReqComponent,canActivate:[AuthGuard],
   },
 
  {
    path: 'editar-tipo-req/:id', component:EditarTipoReqComponent,canActivate:[AuthGuard]
   },
  { 
    path: 'crear-tipo-req', component:CrearTipoReqComponent,canActivate:[AuthGuard]
  },

  //municipio
  {
    path: 'listar-municipio', component:ListarMunicipioComponent,canActivate:[AuthGuard],
   },
 
  {
    path: 'editar-municipio/:id', component:EditarMunicipioComponent,canActivate:[AuthGuard]
   },
  { 
    path: 'crear-municipio', component:CrearMunicipioComponent,canActivate:[AuthGuard]
  },

//sucursal
{
  path: 'listar-sucursal', component:ListarSucursalComponent,canActivate:[AuthGuard],
 },

{
  path: 'editar-sucursal/:id', component:EditarSucursalComponent,canActivate:[AuthGuard]
 },
{ 
  path: 'crear-sucursal', component:CrearSucursalComponent,canActivate:[AuthGuard]
},

//Departamento

{
  path: 'listar-dpto', component:ListarDptoComponent,canActivate:[AuthGuard],
 },

{
  path: 'editar-dpto/:id', component:EditarDptoComponent,canActivate:[AuthGuard]
 },
{ 
  path: 'crear-dpto', component:CrearDptoComponent,canActivate:[AuthGuard]
},

//Ticket
{
path: 'listar-ticket', component:ListarTicketComponent,canActivate:[AuthGuard],
},

{
 path: 'editar-ticket/:id', component:EditarTicketComponent,canActivate:[AuthGuard]
},
{ 
 path: 'crear-ticket', component:CrearTicketComponent,canActivate:[AuthGuard]
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
