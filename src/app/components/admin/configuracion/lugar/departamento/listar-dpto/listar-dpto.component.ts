import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComuRestService } from 'src/app/services/comu-rest.service';
import { LugarRestService } from 'src/app/services/lugar-rest.service';

@Component({
  selector: 'app-listar-dpto',
  templateUrl: './listar-dpto.component.html',
  styleUrls: ['./listar-dpto.component.css']
})
export class ListarDptoComponent implements OnInit {

  private url='http://mda-back.test/api';
  dptoList:any;
  
  


  constructor(
    private comunRest: ComuRestService,
    private lugarRest:LugarRestService, 
    http:HttpClient, 
    private formBuilder: FormBuilder,  
    private router: Router, 
    private route: ActivatedRoute){
    comunRest.get('/dpto').subscribe((data)=>{
      console.log(data);
      this.dptoList=data.data;
    });
  
 
}
  ngOnInit(): void {
   
  }
  
  deleteDpto(id:number){
    if(confirm("¿Desea eliminar el departamento?")){
      console.log(id);
      
      this.lugarRest.deleteDpto(id).subscribe(
        (response)=> console.log(response),
        (error)=>console.log(error)
      );
    
    }
  }
  editDpto(id: number) {
    this.router.navigate(['/editar-dpto',id]);
  }

}
