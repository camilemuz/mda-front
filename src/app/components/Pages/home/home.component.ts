import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SoporteRestService } from 'src/app/services/soporte-rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  
})
export class HomeComponent implements OnInit {
  sopForm:any;
  
  userList:any;
  tipoList:any;
  calList:any;
 prioList:any;
  dptoList:any;
  estList:any;
  catList:any;

  private url='http://mda-back.test/api';

constructor( private sopRest:SoporteRestService, 
  http:HttpClient, 
  private formBuilder: FormBuilder, 
  private router: Router, 
  private route: ActivatedRoute) {
  http.get(this.url+'/users').subscribe((data)=>{
    console.log(data);
    this.userList=data;
  });
  http.get(this.url+'/tipo').subscribe((data)=>{
    console.log(data);
    this.tipoList=data;
  });
  http.get(this.url+'/q').subscribe((data)=>{
    console.log(data);
    this.calList=data;
  });
  http.get(this.url+'/prioridad').subscribe((data)=>{
    console.log(data);
    this.prioList=data;
  });
  http.get(this.url+'/dpto').subscribe((data)=>{
    console.log(data);
    this.dptoList=data;
  });
  http.get(this.url+'/estado').subscribe((data)=>{
    console.log(data);
    this.estList=data;
  });
  http.get(this.url+'/cat').subscribe((data)=>{
    console.log(data);
    this.catList=data;
  });



}
        ngOnInit(): void {
      this.sopForm = new FormGroup({
        'descripcion': new FormControl(null, []),
        'fecha_atencion': new FormControl(null, []),
        'id_users': new FormControl(null, [Validators.required]),
        'id_tiporeq': new FormControl(null, [Validators.required]),
        'id_calificacion': new FormControl(null, []),
        'id_prioridad': new FormControl(null, []),
        'id_departamento': new FormControl(null, [Validators.required]),
        'id_estado': new FormControl(null, []),
        
      }
      ); }

     
      


    get descripcion() { return this.sopForm.get('descripcion'); }
    get fecha_atencion() { return this.sopForm.get('fecha_atencion'); }
    get id_users() { return this.sopForm.get('id_users'); }
    get id_categorias() { return this.sopForm.get('id_categorias'); }
    get id_tiporeq() { return this.sopForm.get('id_tiporeq'); }
    get id_calificacion() { return this.sopForm.get('id_calificacion'); }
    get id_prioridad() { return this.sopForm.get('id_prioridad'); }
    get id_departamento() { return this.sopForm.get('id_departamento'); }
    get id_estado() { return this.sopForm.get('id_estado'); }
    

    Register() {
      // console.log("desde controller",this.registerForm);
      this.sopRest.storeReq(this.sopForm).subscribe(() => {      
        this.router.navigate(['listar-soporte']);
  
      })
      

     }
}

    

    
        
    
  


