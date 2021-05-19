import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LugarRestService } from 'src/app/services/lugar-rest.service';

@Component({
  selector: 'app-crear-sucursal',
  templateUrl: './crear-sucursal.component.html',
  styleUrls: ['./crear-sucursal.component.css']
})
export class CrearSucursalComponent implements OnInit {

  sucForm:any;
  munList:any;
  tipotList:any;

  private url='http://mda-back.test/api';

constructor( private luRest:LugarRestService, http:HttpClient, private formBuilder: FormBuilder,  private router: Router, private route: ActivatedRoute) {
  http.get(this.url+'/municipio').subscribe((data)=>{
    console.log(data);
    this.munList = data;
    });
 
}
        ngOnInit(): void {
      this.sucForm = new FormGroup({
        'cod': new FormControl(null, [Validators.required, Validators.minLength(3)]),
        'sucursal': new FormControl(null, [Validators.required, Validators.minLength(3)]),
        'id_municipio': new FormControl(null, [Validators.required, Validators.minLength(3)]),
        
      }
      ); }

     
      


    get cod() { return this.sucForm.get('cod'); }
    get sucursal() { return this.sucForm.get('sucursal'); }
    get id_municipio() { return this.sucForm.get('id_municipio'); }
    

    Register() {
      // console.log("desde controller",this.sucForm);
      this.luRest.storeSucursal(this.sucForm).subscribe(() => {      
        this.router.navigate(['listar-sucursal']);
  
      })
      

     }
}