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
  ticList:any;  
  estList:any;  
  reqList:any; 



  constructor(private ticRest:SoporteRestService, 
    private comunRest: ComuRestService,
    http:HttpClient, 
    private formBuilder: FormBuilder,  
    private router: Router,
    private route: ActivatedRoute){
    this.comunRest.get('/req').subscribe((data)=>{
      console.log(data);
      this.reqList=data;
    });
   
    http.get(this.url+'/ticket').subscribe((data:any)=>{

      data.data.forEach( (value: any) => {

        this.reqList.data.forEach( (valcat:any) => {
       
           
          if(value.id_req === valcat.id){
            value.descripcion = valcat.descripcion;
          }
          
        })
      })
     
      this.ticList=data;
      console.log(this.ticList);
      this.comunRest.get('/estado').subscribe((data: any)=>{
        console.log(data);
        data.data.forEach( (value: any) => {
          console.log(value);
          this.ticList.data.forEach( (valest:any) => {
            console.log(valest);
             
            if(value.id === valest.id_estado){
              valest.estado = value.estado;
            }
            
          })
        })
      });
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
