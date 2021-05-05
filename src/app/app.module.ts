import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';

import { AuthService } from './services/auth.service';
import { PruebaComponent } from './components/prueba/prueba.component';
import { HomeComponent } from './mesa-ayuda/Pages/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuarioComponent } from './mesa-ayuda/Pages/usuario/usuario.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './mesa-ayuda/Pages/editar-usuario/editar-usuario.component';



@NgModule({
  declarations: [
    AppComponent,    
    LoginComponent, 
    PruebaComponent, 
    HomeComponent,
    NavbarComponent,
    UsuarioComponent,
    CrearUsuarioComponent,
    EditarUsuarioComponent
    
    
   
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
