import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './components/Pages/home/home.component';
import { CrearUsuarioComponent } from './components/admin/usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './components/admin/usuarios/editar-usuario/editar-usuario.component';
import { ListarUsuarioComponent } from './components/admin/usuarios/listar-usuario/listar-usuario.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoaderService } from './components/auth/loader.service';
import { AuthInterceptor } from './components/auth/auth-interceptor.interceptor';
import { RegistroComponent } from './components/auth/registro/registro.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ConfiguracionComponent } from './components/admin/configuracion/configuracion/configuracion.component';
import { CrearCategoriaComponent } from './components/admin/configuracion/catalogo/categoria/crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from './components/admin/configuracion/catalogo/categoria/editar-categoria/editar-categoria.component';
import { ListarCategoriaComponent } from './components/admin/configuracion/catalogo/categoria/listar-categoria/listar-categoria.component';
import { ListarTipoReqComponent } from './components/admin/configuracion/catalogo/sub-categoria/listar-tipo-req/listar-tipo-req.component';
import { CrearTipoReqComponent } from './components/admin/configuracion/catalogo/sub-categoria/crear-tipo-req/crear-tipo-req.component';
import { EditarTipoReqComponent } from './components/admin/configuracion/catalogo/sub-categoria/editar-tipo-req/editar-tipo-req.component';
import { ListarMunicipioComponent } from './components/admin/configuracion/lugar/municipio/listar-municipio/listar-municipio.component';
import { EditarMunicipioComponent } from './components/admin/configuracion/lugar/municipio/editar-municipio/editar-municipio.component';
import { CrearMunicipioComponent } from './components/admin/configuracion/lugar/municipio/crear-municipio/crear-municipio.component';
import { ListarSucursalComponent } from './components/admin/configuracion/lugar/sucursal/listar-sucursal/listar-sucursal.component';
import { EditarSucursalComponent } from './components/admin/configuracion/lugar/sucursal/editar-sucursal/editar-sucursal.component';
import { CrearSucursalComponent } from './components/admin/configuracion/lugar/sucursal/crear-sucursal/crear-sucursal.component';
import { ListarDptoComponent } from './components/admin/configuracion/lugar/departamento/listar-dpto/listar-dpto.component';
import { EditarDptoComponent } from './components/admin/configuracion/lugar/departamento/editar-dpto/editar-dpto.component';
import { CrearDptoComponent } from './components/admin/configuracion/lugar/departamento/crear-dpto/crear-dpto.component';
import { ListarTicketComponent } from './components/tickets/listar-ticket/listar-ticket.component';
import { EditarTicketComponent } from './components/tickets/editar-ticket/editar-ticket.component';
import { CrearTicketComponent } from './components/tickets/crear-ticket/crear-ticket.component';



@NgModule({
  declarations: [
    AppComponent,    
    LoginComponent, 
    HomeComponent,
    NavbarComponent,
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    ListarUsuarioComponent,
    RegistroComponent,
    DashboardComponent,
    ConfiguracionComponent,
    CrearCategoriaComponent,
    EditarCategoriaComponent,
    ListarCategoriaComponent,
    ListarTipoReqComponent,
    CrearTipoReqComponent,
    EditarTipoReqComponent,
    ListarMunicipioComponent,
    EditarMunicipioComponent,
    CrearMunicipioComponent,
    ListarSucursalComponent,
    EditarSucursalComponent,
    CrearSucursalComponent,
    ListarDptoComponent,
    EditarDptoComponent,
    CrearDptoComponent,
    ListarTicketComponent,
    EditarTicketComponent,
    CrearTicketComponent
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
   
  ],
  providers: [
    AuthService,    
    LoaderService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
