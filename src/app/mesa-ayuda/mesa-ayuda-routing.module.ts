import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from '../mesa-ayuda/Pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';



export const routes: Routes = [
  
 
  {
    path: 'Home', component: HomeComponent  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MesaAyudaRoutingModule { }
