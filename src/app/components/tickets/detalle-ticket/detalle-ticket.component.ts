import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComuRestService } from 'src/app/services/comu-rest.service';
import { SoporteRestService } from 'src/app/services/soporte-rest.service';

@Component({
  selector: 'app-detalle-ticket',
  templateUrl: './detalle-ticket.component.html',
  styleUrls: ['./detalle-ticket.component.css']
})
export class DetalleTicketComponent implements OnInit {

  detForm:any;
  
 ticketList:any[]=[];
  reqList:any[]=[];
  
  
  dataUser:any;

  private url='http://mda-back.test/api';
 

constructor(

  private comunRest:ComuRestService, 
 public http:HttpClient, 
  private formBuilder: FormBuilder, 
  private router: Router, 
  private route: ActivatedRoute) {

    

  
  


  this.comunRest.get('/req').subscribe((data)=>{
    console.log(data);
    this.reqList=data.data;
  });
  

}
        ngOnInit(): void {
      this.detForm = new FormGroup({
        'descripcion': new FormControl(null, []),  
        'interno': new FormControl(null, []),      
        'id_user': new FormControl(null, []),
        'id_tiporeq': new FormControl(null, []),
        'id_departamento': new FormControl(null, []),


      }      
      ); 
  
      
    } 

    

    get descripcion() { return this.detForm.get('descripcion'); }  
    get id_tiporeq() { return this.detForm.get('id_tiporeq'); }    
    get id_departamento() { return this.detForm.get('id_departamento'); }
    get id_user() { return this.detForm.get('id_user'); }
    get interno() { return this.detForm.get('interno'); }
    

    
    

    
     

    
}

    

    
        
    
  