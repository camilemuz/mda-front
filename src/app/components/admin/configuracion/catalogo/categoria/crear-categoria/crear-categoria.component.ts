import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogoRestService } from 'src/app/services/catalogo-rest.service';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent implements OnInit {

  catForm:any;
    catList:any;
    private url='http://mda-back.test/api';

  constructor( private catRest:CatalogoRestService, http:HttpClient, private formBuilder: FormBuilder,  private router: Router, private route: ActivatedRoute) {
    http.get(this.url+'/cat').subscribe((data)=>{
      console.log(data);
      this.catList=data;
    });
 
  
}
          ngOnInit(): void {
        this.catForm = new FormGroup({
          'cod': new FormControl(null, [Validators.required, Validators.minLength(3)]),
          'categoria': new FormControl(null, [Validators.required, Validators.minLength(3)]),
          
        }
        ); }

       
        


      get cod() { return this.catForm.get('cod'); }
      get categoria() { return this.catForm.get('categoria'); }
      

      Register() {
        // console.log("desde controller",this.registerForm);
        this.catRest.storeCategoria(this.catForm).subscribe(() => {      
          this.router.navigate(['listar-categoria']);
    
        })
        
  
       }
   


  
}