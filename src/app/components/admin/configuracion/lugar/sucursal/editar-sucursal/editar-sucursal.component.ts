import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LugarRestService } from 'src/app/services/lugar-rest.service';

@Component({
  selector: 'app-editar-sucursal',
  templateUrl: './editar-sucursal.component.html',
  styleUrls: ['./editar-sucursal.component.css']
})
export class EditarSucursalComponent implements OnInit {

  updateSucFrom: FormGroup | any;
  serverErrors = [];  
  munList:any;
  @Input() data: any;

  private url='http://mda-back.test/api';
  constructor(
    private route: ActivatedRoute,
     private luRest: LugarRestService,
     private router: Router,
     public http: HttpClient ) { 
      http.get(this.url+'/municipio').subscribe((data)=>{
        console.log(data);
        this.munList=data;
        });

     }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    console.log(id);

    this.luRest.editSucursal(id).subscribe(
      (response) =>{
        console.log(response);
        
        this.updateSucFrom.patchValue({
        'cod': response.data.cod,
        'nombre_sucursal': response.data.nombre_sucursal,
        'id_municipio': response.data.id_municipio,
        
        })
      },
      (error) => console.log(error)
    );
    
    console.log(this.data);

    this.updateSucFrom = new FormGroup({
      'cod': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'nombre_sucursal': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'id_municipio': new FormControl(null, [Validators.required, Validators.minLength(3)]),
         
      
    });


}
      get cod() { return this.updateSucFrom.get('cod'); }
      get nombre_sucursal() { return this.updateSucFrom.get('nombre_sucursal'); }
      get id_municipio() { return this.updateSucFrom.get('id_municipio'); }
     

      updateSucDetails(){
        let id = this.route.snapshot.params.id;
        this.luRest.updateSucursal(this.updateSucFrom,id).subscribe(
          (response) => {
            console.log(response),
            this.router.navigate(['/listar-sucursal'])
          },
          (error) => console.log(error),
          () => console.log('completed')
        );
      }


}