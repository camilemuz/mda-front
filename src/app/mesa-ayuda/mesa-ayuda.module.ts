import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MesaAyudaComponent } from './mesa-ayuda.component';
import { HomeComponent } from './Pages/home/home.component';





@NgModule({
  declarations: [
    
       HomeComponent,
    
    
    
  ],
  imports: [
    CommonModule,
    
    
  ],
  bootstrap: [MesaAyudaComponent]
})
export class MesaAyudaModule { }
