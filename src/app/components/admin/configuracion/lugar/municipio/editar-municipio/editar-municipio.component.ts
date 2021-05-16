import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LugarRestService } from 'src/app/services/lugar-rest.service';

@Component({
  selector: 'app-editar-municipio',
  templateUrl: './editar-municipio.component.html',
  styleUrls: ['./editar-municipio.component.css']
})
export class EditarMunicipioComponent implements OnInit {

  updateMunFrom: FormGroup | any;
  serverErrors = [];
  MunList:any;
  @Input() data: any;

  private url='http://mda-back.test/api';
  constructor(
    private route: ActivatedRoute,
     private luRest: LugarRestService,
     private router: Router,
     public http: HttpClient ) { 
      http.get(this.url+'/municipio').subscribe((data)=>{
        console.log(data);
        this.MunList=data;
      });
     }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    console.log(id);

    this.luRest.editMunicipio(id).subscribe(
      (response) =>{
        console.log(response);
        
        this.updateMunFrom.patchValue({
        'cod': response.data.cod,
        'nombre_municipio': response.data.nombre_municipio,
        
        })
      },
      (error) => console.log(error)
    );
    
    console.log(this.data);

    this.updateMunFrom = new FormGroup({
      'cod': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'nombre_municipio': new FormControl(null, [Validators.required, Validators.minLength(3)]),
         
      
    });


}
      get cod() { return this.updateMunFrom.get('cod'); }
      get nombre_municipio() { return this.updateMunFrom.get('nombre_municipio'); }
     

      updateMunDetails(){
        let id = this.route.snapshot.params.id;
        this.luRest.updateMunicipio(this.updateMunFrom,id).subscribe(
          (response) => {
            console.log(response),
            this.router.navigate(['/listar-municipio'])
          },
          (error) => console.log(error),
          () => console.log('completed')
        );
      }


}