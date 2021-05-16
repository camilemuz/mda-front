import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LugarRestService } from 'src/app/services/lugar-rest.service';

@Component({
  selector: 'app-listar-sucursal',
  templateUrl: './listar-sucursal.component.html',
  styleUrls: ['./listar-sucursal.component.css']
})
export class ListarSucursalComponent implements OnInit {

  private url='http://mda-back.test/api';
  SucursalList:any;
  
  


  constructor(private lugarRest:LugarRestService, 
    http:HttpClient, 
    private formBuilder:FormBuilder,  
    private router: Router, 
    private route: ActivatedRoute){
    http.get(this.url+'/sucursal').subscribe((data)=>{
      console.log(data);
      this.SucursalList=data;
    });
  
 
}
  ngOnInit(): void {
   
  }
  
  deleteSucursal(id:number){
    if(confirm("¿Desea eliminar la sucursal?")){
      console.log(id);
      
      this.lugarRest.deleteSucursal(id).subscribe(
        (response)=> console.log(response),
        (error)=>console.log(error)
      );
    
    }
  }
  editSucursal(id: number) {
    this.router.navigate(['/editar-sucursal',id]);
  }

}
