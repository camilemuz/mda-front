import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogoRestService } from 'src/app/services/catalogo-rest.service';

@Component({
  selector: 'app-listar-tipo-req',
  templateUrl: './listar-tipo-req.component.html',
  styleUrls: ['./listar-tipo-req.component.css']
})
export class ListarTipoReqComponent implements OnInit {

  private url='http://mda-back.test/api';
  ReqList:any;
  CatList:any;
  
  constructor(private CatRest:CatalogoRestService, http:HttpClient, private formBuilder: FormBuilder,  private router: Router, private route: ActivatedRoute){
    
    http.get(this.url+'/cat').subscribe((data)=>{
      console.log(data);
      this.CatList=data;
    });
    http.get(this.url+'/tipo').subscribe((data:any)=>{

      data.data.forEach( (value: any) => {
        this.CatList.data.forEach( (valcat:any) => {
          if(value.id_categoria === valcat.id){
            value.categoria = valcat.categoria;
          }
        })
      })
      // console.log(data);
      // this.ReqList=data;
      this.ReqList=data;
      console.log(this.ReqList);
    });
 
}
  ngOnInit(): void {
   
  }
  
  deleteTiporeq(id:number){
    if(confirm("¿Desea eliminar Requerimiento?")){
      console.log(id);
      
      this.CatRest.deleteTiporeq(id).subscribe(
        (response)=> console.log(response),
        (error)=>console.log(error)
      );
    
    }
  }
  editTiporeq(id: number) {
    this.router.navigate(['/editar-tipo-req',id]);
  }

}
