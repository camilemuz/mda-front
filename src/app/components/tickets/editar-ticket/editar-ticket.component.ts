import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SoporteRestService } from 'src/app/services/soporte-rest.service';

@Component({
  selector: 'app-editar-ticket',
  templateUrl: './editar-ticket.component.html',
  styleUrls: ['./editar-ticket.component.css']
})
export class EditarTicketComponent implements OnInit {

  updateTic: FormGroup | any;
  serverErrors = [];
  ticList:any;
  reqList:any;

  @Input() data: any;

  private url='http://mda-back.test/api';
  constructor(
    private route: ActivatedRoute,
     private sopRest: SoporteRestService,
    
     private router: Router,
     public http: HttpClient ) { 
      http.get(this.url+'/req').subscribe((data)=>{
        console.log(data);
        this.reqList=data;
      });
      http.get(this.url+'/ticket').subscribe((data)=>{
        console.log(data);
        this.ticList=data;
      });

     }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    console.log(id);

    this.sopRest.editReq(id).subscribe(
      (response) =>{
        console.log(response);
        
        this.updateTic.patchValue({
        'descripcion': response.data.descripcion,
        'interno': response.data.interno,
        'id_tiporeq': response.data.id_tiporeq,
        'id_departamento':response.data.id_departamento,
        
        // 'email':response.data.email
        })
      },
      (error) => console.log(error)
    );
    
    console.log(this.data);

    this.updateTic = new FormGroup({
      'descripcion': new FormControl(null, [Validators.required, Validators.minLength(3)]),
          'interno': new FormControl(null, [Validators.required, Validators.minLength(3)]),
          'id_tiporeq': new FormControl(null,[]),
          'id_departamento': new FormControl(null, [Validators.required]),
          
      
    });


}
      get nombre() { return this.updateTic.get('nombre'); }
      get ap_paterno() { return this.updateTic.get('ap_paterno'); }
      get ap_materno() { return this.updateTic.get('ap_materno'); }
      // get email() { return this.updateUser.get('email'); }
      get rol() { return this.updateTic.get('rol'); }
      get id_cargo() { return this.updateTic.get('id_cargo'); }
      get unidad() { return this.updateTic.get('unidad'); }

      updateUserDetails(){
        let id = this.route.snapshot.params.id;
        this.sopRest.updateReq(this.updateTic,id).subscribe(
          (response) => {
            console.log(response),
            this.router.navigate(['/usuario'])
          },
          (error) => console.log(error),
          () => console.log('completed')
        );
      }


}