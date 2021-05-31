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
  dptoList:any; 



  constructor(private ticRest:SoporteRestService, 
    private comunRest: ComuRestService,
    http:HttpClient, 
    private formBuilder: FormBuilder,  
    private router: Router,
    private route: ActivatedRoute){
      
    this.comunRest.get('/req').subscribe((data)=>{
      console.log(data);
      this.reqList=data;
      this.comunRest.get('/tipo').subscribe((datos)=>{
        this.reqList.data.forEach((values:any) => {
          datos.data.forEach((ele:any) => {
            if(values.id_tiporeq===ele.id){
              values.tiporeq=ele.tiporeq;
              
            }
            
          });
        });
      });
      this.comunRest.get('/dpto').subscribe((datosdpto)=>{
        console.log("deptrt-->",datosdpto);
        this.reqList.data.forEach((valuesdpto:any) => {
          datosdpto.data.forEach((eledpto:any) => {
            if(valuesdpto.id_departamento===eledpto.id){
              valuesdpto.departamento=eledpto.departamento;
              
              
            }
            
          });
        });
      });
        
      http.get(this.url+'/ticket').subscribe((data:any)=>{

        data.data.forEach( (value: any) => {
  
          this.reqList.data.forEach( (valcat:any) => {      
             
            if(value.id_req === valcat.id){
              value.descripcion = valcat.descripcion;
              value.tipoRequerimiento = valcat.tiporeq;
              value.dpto=valcat.departamento;
            
            }
            
          })
        })
       
        this.ticList=data.data;
        console.log(this.ticList);
        this.comunRest.get('/estado').subscribe((data: any)=>{
          console.log(data);
          data.data.forEach( (value: any) => {
            this.ticList.forEach( (valest:any) => {
               
              if(value.id === valest.id_estado){
                valest.estado = value.estado;  
                         
              }
              
            })
          })
        });
        
        
      

        this.ticList=data.data;
        console.log(this.ticList);

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

   detalleTic(value: any){
    
     this.router.navigate(['/detalle-ticket',value.id,{datos: JSON.stringify(value)}]);
   }

}
