import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LugarRestService } from 'src/app/services/lugar-rest.service';

@Component({
  selector: 'app-editar-dpto',
  templateUrl: './editar-dpto.component.html',
  styleUrls: ['./editar-dpto.component.css']
})
export class EditarDptoComponent implements OnInit {

  updateDptoFrom: FormGroup | any;
  serverErrors = [];
  dptoList:any;
  @Input() data: any;

  private url='http://mda-back.test/api';
  constructor(
    private route: ActivatedRoute,
     private luRest: LugarRestService,
     private router: Router,
     public http: HttpClient ) { 
      http.get(this.url+'/dpto').subscribe((data)=>{
        console.log(data);
        this.dptoList=data;
      });
     }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    console.log(id);

    this.luRest.editDpto(id).subscribe(
      (response) =>{
        console.log(response);
        
        this.updateDptoFrom.patchValue({
        'cod': response.data.cod,
        'nombre_departamento': response.data.nombre_departamento,
        
        })
      },
      (error) => console.log(error)
    );
    
    console.log(this.data);

    this.updateDptoFrom = new FormGroup({
      'cod': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'nombre_departamento': new FormControl(null, [Validators.required, Validators.minLength(3)]),
         
      
    });


}
      get cod() { return this.updateDptoFrom.get('cod'); }
      get nombre_departamento() { return this.updateDptoFrom.get('nombre_departamento'); }
     

      updateDptoetails(){
        let id = this.route.snapshot.params.id;
        this.luRest.updateDpto(this.updateDptoFrom,id).subscribe(
          (response) => {
            console.log(response),
            this.router.navigate(['/listar-dpto'])
          },
          (error) => console.log(error),
          () => console.log('completed')
        );
      }


}