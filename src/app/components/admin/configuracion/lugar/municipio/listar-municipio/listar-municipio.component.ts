import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LugarRestService } from 'src/app/services/lugar-rest.service';

@Component({
  selector: 'app-listar-municipio',
  templateUrl: './listar-municipio.component.html',
  styleUrls: ['./listar-municipio.component.css']
})
export class ListarMunicipioComponent implements OnInit {

  private url='http://mda-back.test/api';
  MunicipioList:any;
  
  


  constructor(private lugarRest:LugarRestService, 
    http:HttpClient, 
    private formBuilder: 
    FormBuilder,  
    private router: Router, 
    private route: ActivatedRoute){
    http.get(this.url+'/municipio').subscribe((data)=>{
      console.log(data);
      this.MunicipioList=data;
    });
  
 
}
  ngOnInit(): void {
   
  }
  
  deleteMunicipio(id:number){
    if(confirm("¿Desea eliminar el municipio?")){
      console.log(id);
      
      this.lugarRest.deleteMunicipio(id).subscribe(
        (response)=> console.log(response),
        (error)=>console.log(error)
      );
    
    }
  }
  editMunicipio(id: number) {
    this.router.navigate(['/editar-municipio',id]);
  }

}
