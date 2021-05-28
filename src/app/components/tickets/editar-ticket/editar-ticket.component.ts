import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComuRestService } from 'src/app/services/comu-rest.service';
import { SoporteRestService } from 'src/app/services/soporte-rest.service';

@Component({
  selector: 'app-editar-ticket',
  templateUrl: './editar-ticket.component.html',
  styleUrls: ['./editar-ticket.component.css']
})
export class EditarTicketComponent implements OnInit {

  updateTicform: FormGroup | any;
  serverErrors = [];

  ticList:any;
  reqList:any;
  estList:any;
  dptoList:any;
  sucList:any;
 munList:any;
 tipoList:any;
 catList:any;


  @Input() data: any;

  private url='http://mda-back.test/api';
  constructor(
    private comunRest: ComuRestService,
    private route: ActivatedRoute,
     private sopRest: SoporteRestService,
     private router: Router,
     public http: HttpClient ) { 
     this.comunRest.get('/req').subscribe((data)=>{
      console.log(data);
      this.reqList=data.data;
    });
    this.comunRest.get('/tipo').subscribe((data)=>{
      console.log(data);
      this.tipoList=data.data;
    });
    this.comunRest.get('/sucursal').subscribe((data)=>{
      console.log(data);
      this.sucList=data.data;
    });
   
    this.comunRest.get('/dpto').subscribe((data)=>{
      console.log(data);
      this.dptoList=data.data;
    });
    this.comunRest.get('/estado').subscribe((data)=>{
      console.log(data);
      this.estList=data.data;
    });
    this.comunRest.get('/cat').subscribe((data)=>{
      console.log(data);
      this.catList=data.data;
    });
    this.comunRest.get('/municipio').subscribe((data)=>{
      console.log(data);
      this.munList=data.data;
    });
    this.comunRest.get('/dpto').subscribe((data)=>{
      console.log(data);
      this.dptoList=data.data;
    });
    // this.comunRest.get('/ticket').subscribe((data:any)=>{

    //   data.data.forEach( (value: any) => {

    //     this.reqList.data.forEach( (valcat:any) => {
       
           
    //       if(value.id_req === valcat.id){
    //         value.descripcion = valcat.descripcion;
    //       }
          
    //     })
    //   })
     
    //   this.ticList=data;
    //   console.log(this.ticList);
    //   this.comunRest.get('/estado').subscribe((data: any)=>{
    //     console.log(data);
    //     data.data.forEach( (value: any) => {
    //       console.log(value);
    //       this.ticList.data.forEach( (valest:any) => {
    //         console.log(valest);
             
    //         if(value.id === valest.id_estado){
    //           valest.estado = value.estado;
    //         }
            
    //       })
    //     })
    //   });
    // });

  }
     
  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    console.log(id);

    this.sopRest.editReq(id).subscribe(
      (response) =>{
        console.log(response);
        
        this.updateTicform.patchValue({
        'descripcion': response.data.descripcion,
        'interno': response.data.interno,
        'id_tiporeq': response.data.id_tiporeq,
        'id_departamento':response.data.id_departamento,
        'id_estado': response.data.id_estado,
        'comentarios': response.data.comentarios,
       
     
        })
      },
      (error) => console.log(error)
    );
    
    console.log(this.data);

    this.updateTicform = new FormGroup({
      'descripcion': new FormControl(null, [Validators.required, Validators.minLength(3)]),
          'interno': new FormControl(null, [Validators.required, Validators.minLength(3)]),
          'id_tiporeq': new FormControl(null,[Validators.required]),
          'id_departamento': new FormControl(null, [Validators.required]),
          'id_estado': new FormControl(null, [Validators.required]),
          'comentarios': new FormControl(null, [Validators.required]),
    });
   
      }
   
      get id_tiporeq() { return this.updateTicform.get('id_tiporeq'); }
      get descripcion() { return this.updateTicform.get('descripcion'); }
      get interno() { return this.updateTicform.get('interno'); }  
      get id_departamento() { return this.updateTicform.get('id_departamento'); }  
      get id_estado() { return this.updateTicform.get('id_estado'); }      
      get comentarios() { return this.updateTicform.get('comentarios'); }
      

      updateTicDetails(){
        let id = this.route.snapshot.params.id;
       
        var data={
          'descripcion': this.updateTicform.value.descripcion,
        'interno': this.updateTicform.value.interno,
        'id_tiporeq': this.updateTicform.value.id_tiporeq,
        'id_departamento':this.updateTicform.value.id_departamento,
        'id_estado': Number(this.updateTicform.value.id_estado),
        'comentarios': this.updateTicform.value.comentarios,
        }
        console.log('dadrf',data);
        
        this.sopRest.updateReq(data,id).subscribe(
          (response) => {
            console.log(response),
            this.router.navigate(['/listar-ticket'])
            alert('Ticket Actualizado')
          },
          (error) => console.log(error),
          () => console.log('completed')
        );
      }




      filtroChange(e:any){
        console.log(e.target.value);
        if(e !== undefined){
         this.comunRest.get('/filtro/'+e.target.value).subscribe(resp => {
           console.log('respo', resp);
           this.sucList=resp.data;
           
           
         }, error=>{
           console.log('erro', error);
           
         })
        }
        
        
      }
 
      filtroChangeCat(c:any){
       console.log(c.target.value);
       
        this.comunRest.get('/filtrocat/'+c.target.value).subscribe(respo => {
          console.log('respo', respo);
          this.tipoList=respo.data;
          
        }, error=>{
          console.log('erro', error);
          
        })
       
       
       
     }



}