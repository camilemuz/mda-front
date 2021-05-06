import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
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



@NgModule({
  declarations: [
    AppComponent,    
    LoginComponent, 
  
    HomeComponent,
    NavbarComponent,
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    ListarUsuarioComponent
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
   
   
  ],
  providers: [
    AuthService,
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
