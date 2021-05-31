import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComuRestService } from 'src/app/services/comu-rest.service';


@Component({
  selector: 'app-detalle-ticket',
  templateUrl:'./detalle-ticket.component.html',
  styleUrls: ['./detalle-ticket.component.css']
})
export class DetalleTicketComponent implements OnInit {

  detForm:any;
  
 ticketList:any;
  reqList:any;
  
  
  dataUser:any;
  datosFila:any;

  private url='http://mda-back.test/api';
 

constructor(

  private comunRest:ComuRestService, 
 public http:HttpClient, 
  private formBuilder: FormBuilder, 
  private router: Router, 
  private route: ActivatedRoute) {
    this.datosFila = JSON.parse(this.route.snapshot.params.datos);
    console.log('fila', this.datosFila);
    

    let id = this.route.snapshot.params.id;
    console.log('iddd', id);
    this.comunRest.get('/ticket/'+id).subscribe(resp => {
      console.log('respo', resp);
      this.ticketList=resp.data;
      
      
    }, error=>{
      console.log('erro', error);
      
    })
    
    this.comunRest.get('/ticket').subscribe((data)=>{
      console.log('sdfgsfd',data);
      
    });


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
        'id_estado': new FormControl(null, []),
        'comentarios': new FormControl(null, []),
        'numero': new FormControl(null, []),



      }      
      ); 
  
      
    } 

    

      get id_tiporeq() { return this.detForm.get('id_tiporeq'); }
      get descripcion() { return this.detForm.get('descripcion'); }
      get interno() { return this.detForm.get('interno'); }  
      get id_departamento() { return this.detForm.get('id_departamento'); }  
      get id_estado() { return this.detForm.get('id_estado'); }      
      get comentarios() { return this.detForm.get('comentarios'); }
      get numero() { return this.detForm.get('numero'); }

    
     

    
}

    

    
        
    
  