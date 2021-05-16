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

  private url='http://mda-back.test/api';

constructor( private catRest:CatalogoRestService, http:HttpClient, private formBuilder: FormBuilder,  private router: Router, private route: ActivatedRoute) {
  http.get(this.url+'/tipo').subscribe((data)=>{
    console.log(data);
    this.tipotList=data;
  });
  http.get(this.url+'/cat').subscribe((data)=>{
    console.log(data);
    this.catList=data;
  });


}
        ngOnInit(): void {
      this.reqForm = new FormGroup({
        'cod': new FormControl(null, [Validators.required, Validators.minLength(3)]),
        'sub_categoria': new FormControl(null, [Validators.required, Validators.minLength(3)]),
        'id_categorias': new FormControl(null, [Validators.required, Validators.minLength(3)]),
        
      }
      ); }

     
      


    get cod() { return this.reqForm.get('cod'); }
    get sub_categoria() { return this.reqForm.get('sub_categoria'); }
    get id_categorias() { return this.reqForm.get('id_categorias'); }
    

    Register() {
      // console.log("desde controller",this.registerForm);
      this.catRest.storeTiporeq(this.reqForm).subscribe(() => {      
        this.router.navigate(['listar-tipo-req']);
  
      })
      

     }
}