import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogoRestService } from 'src/app/services/catalogo-rest.service';

@Component({
  selector: 'app-crear-tipo-req',
  templateUrl: './crear-tipo-req.component.html',
  styleUrls: ['./crear-tipo-req.component.css']
})
export class CrearTipoReqComponent implements OnInit {

  reqForm:any;
  catList:any;
  tipotList:any;
  divList:any;

  private url='http://mda-back.test/api';

constructor( private catRest:CatalogoRestService, http:HttpClient, private formBuilder: FormBuilder,  private router: Router, private route: ActivatedRoute) {
  http.get(this.url+'/tipo').subscribe((data)=>{
    console.log(data);
    this.tipotList=data.data;
  });
  http.get(this.url+'/cat').subscribe((data)=>{
    console.log(data);
    this.catList=data.data;
  });
  http.get(this.url+'/div').subscribe((data)=>{
    console.log(data);
    this.divList=data.data;
  });


}
        ngOnInit(): void {
      this.reqForm = new FormGroup({
        'cod': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'tiporeq': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'id_categoria': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'id_division': new FormControl(null, [Validators.required, Validators.minLength(3)]),
        
      }
      ); }

     
      


      get cod() { return this.reqForm.get('cod'); }
      get tiporeq() { return this.reqForm.get('tiporeq'); }
      get id_categoria() { return this.reqForm.get('id_categoria'); }
      get id_division() { return this.reqForm.get('id_division'); }
    

    Register() {
      // console.log("desde controller",this.registerForm);
      this.catRest.storeTiporeq(this.reqForm).subscribe(() => {      
        this.router.navigate(['listar-tipo-req']);
  
      })
      

     }
}