import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogoRestService } from 'src/app/services/catalogo-rest.service';
import { ComuRestService } from 'src/app/services/comu-rest.service';

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.css']
})
export class ListarCategoriaComponent implements OnInit {

  private url='http://mda-back.test/api';
  CategotriaList:any;
  
  


  constructor(
    private comunRest: ComuRestService,
    private CatRest:CatalogoRestService, 
    http:HttpClient, 
    private formBuilder: FormBuilder,  
    private router: Router, 
    private route: ActivatedRoute){
    this.comunRest.get('/cat').subscribe((data)=>{
      console.log(data);
      this.CategotriaList=data.data;
    });
  
 
}
  ngOnInit(): void {
   
  }
  
  deleteCategoria(id:number){
    if(confirm("¿Desea eliminar categoria?")){
      console.log(id);
      
      this.CatRest.deleteCategoria(id).subscribe(
        (response)=> console.log(response),
        (error)=>console.log(error)
      );
    
    }
  }
  editCategoria(id: number) {
    this.router.navigate(['/editar-categoria',id]);
  }

}
