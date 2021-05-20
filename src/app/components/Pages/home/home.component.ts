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
  munList:any;
  sucList:any;
  

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
  http.get(this.url+'/municipio').subscribe((data)=>{
    console.log(data);
    this.munList=data;
  });
  http.get(this.url+'/sucursal').subscribe((data)=>{
    console.log(data);
    this.sucList=data;
  });

}
        ngOnInit(): void {
      this.sopForm = new FormGroup({
        'descripcion': new FormControl(null, []),        
        'id_users': new FormControl(null, []),
        'id_categoria': new FormControl(null, []),
        'id_tiporeq': new FormControl(null, []),
        'id_sucursal': new FormControl(null, []),
        'id_municipio': new FormControl(null, []),
        'id_departamento': new FormControl(null, []),
        
        

      }
      ); }

     
      


    get descripcion() { return this.sopForm.get('descripcion'); }  
    get id_users() { return this.sopForm.get('id_users'); }
    get id_categoria() { return this.sopForm.get('id_categoria'); }
    get id_tiporeq() { return this.sopForm.get('id_tiporeq'); }    
    get id_departamento() { return this.sopForm.get('id_departamento'); }
    
    

    Register() {
      // console.log("desde controller",this.registerForm);
      this.sopRest.storeReq(this.sopForm).subscribe(() => {      
        this.router.navigate(['listar-tikect']);
  
      })
      

     }

     cambioCategoria(){
      //Aqui va tu logica de consulta a la BD
  
      this.id_categoria === this.id_tiporeq;
    }
}

    

    
        
    
  


