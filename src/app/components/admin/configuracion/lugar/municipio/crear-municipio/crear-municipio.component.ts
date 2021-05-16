import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LugarRestService } from 'src/app/services/lugar-rest.service';

@Component({
  selector: 'app-crear-municipio',
  templateUrl: './crear-municipio.component.html',
  styleUrls: ['./crear-municipio.component.css']
})
export class CrearMunicipioComponent implements OnInit {

  reqForm:any;
    lugarList:any;
    private url='http://mda-back.test/api';

  constructor( private lugarRest:LugarRestService, http:HttpClient, private formBuilder: FormBuilder,  private router: Router, private route: ActivatedRoute) {
    http.get(this.url+'/municipio').subscribe((data)=>{
      console.log(data);
      this.lugarList=data;
    });
 
  
}
          ngOnInit(): void {
        this.reqForm = new FormGroup({
          'cod': new FormControl(null, [Validators.required, Validators.minLength(3)]),
          'nombre_municipio': new FormControl(null, [Validators.required, Validators.minLength(3)]),
          
        }
        ); }

       
        


      get cod() { return this.reqForm.get('cod'); }
      get nombre_municipio() { return this.reqForm.get('nombre_municipio'); }
      

      Register() {
        // console.log("desde controller",this.registerForm);
        this.lugarRest.storeMunicipio(this.reqForm).subscribe(() => {      
          this.router.navigate(['listar-municipio']);
    
        })
        
  
       }
   


  
}