import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogoRestService } from 'src/app/services/catalogo-rest.service';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit {

  updateCatFrom: FormGroup | any;
  serverErrors = [];
  catList:any;
  @Input() data: any;

  private url='http://mda-back.test/api';
  constructor(
    private route: ActivatedRoute,
     private catRest: CatalogoRestService,
     private router: Router,
     public http: HttpClient ) { 
      http.get(this.url+'/cat').subscribe((data)=>{
        console.log(data);
        this.catList=data;
      });
     }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    console.log(id);

    this.catRest.editCategoria(id).subscribe(
      (response) =>{
        console.log(response);
        
        this.updateCatFrom.patchValue({
        'cod': response.data.cod,
        'categoria': response.data.categoria,
        
        })
      },
      (error) => console.log(error)
    );
    
    console.log(this.data);

    this.updateCatFrom = new FormGroup({
      'cod': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'categoria': new FormControl(null, [Validators.required, Validators.minLength(3)]),
         
      
    });


}
      get cod() { return this.updateCatFrom.get('cod'); }
      get categoria() { return this.updateCatFrom.get('categoria'); }
     

      updateCatDetails(){
        let id = this.route.snapshot.params.id;
        this.catRest.updateCategoria(this.updateCatFrom,id).subscribe(
          (response) => {
            console.log(response),
            this.router.navigate(['/usuario'])
          },
          (error) => console.log(error),
          () => console.log('completed')
        );
      }


}