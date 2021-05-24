import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComuRestService } from 'src/app/services/comu-rest.service';
import { SoporteRestService } from 'src/app/services/soporte-rest.service';

@Component({
  selector: 'app-listar-ticket',
  templateUrl: './listar-ticket.component.html',
  styleUrls: ['./listar-ticket.component.css']
})
export class ListarTicketComponent implements OnInit {

  private url='http://mda-back.test/api';
  ticList:any[]=[];  


  constructor(private ticRest:SoporteRestService, 
    private comunRest: ComuRestService,
    http:HttpClient, 
    private formBuilder: FormBuilder,  
    private router: Router,
    private route: ActivatedRoute){
    this.comunRest.get('/req').subscribe((data)=>{
      console.log(data);
      this.ticList=data.data;
    });
  
 
}
  ngOnInit(): void {
   
  }
  
  deleteTic(id:number){
    if(confirm("¿Desea eliminar ticket?")){
      console.log(id);
      
      this.ticRest.deleteReq(id).subscribe(
        (response)=> console.log(response),
        (error)=>console.log(error)
      );
    
    }
  }
  editTic(id: number) {
    this.router.navigate(['/editar-ticket',id]);
  }

   detalleTic(id:number){
     this.router.navigate(['/detalle-ticket',id]);
   }

}
