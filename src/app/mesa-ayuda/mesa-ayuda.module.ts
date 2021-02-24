import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MesaAyudaComponent } from './mesa-ayuda.component';
import { HomeComponent } from './Pages/home/home.component';
import { UsuarioComponent } from './Pages/usuario/usuario.component';
import { CrearUsuarioComponent } from './Pages/crear-usuario/crear-usuario.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';










@NgModule({
  declarations: [
    
       HomeComponent,
       UsuarioComponent,
       CrearUsuarioComponent,
       SidebarComponent
       


       
    
       
    
    
    
  ],
  imports: [
    CommonModule,
    
    
  ],
  bootstrap: [MesaAyudaComponent]
})
export class MesaAyudaModule { }
