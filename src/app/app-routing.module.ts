
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from 'src/app/mesa-ayuda/Pages/home/home.component';


export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'mda',
    loadChildren: () => import('./mesa-ayuda/mesa-ayuda.module').then(m => m.MesaAyudaModule),
  },
  {
    path: '**', redirectTo: 'login'
  },
  {
    path: 'Home', component: HomeComponent  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
