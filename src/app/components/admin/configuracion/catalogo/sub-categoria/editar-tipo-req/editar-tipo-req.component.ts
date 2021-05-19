import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogoRestService } from 'src/app/services/catalogo-rest.service';

@Component({
  selector: 'app-editar-tipo-req',
  templateUrl: './editar-tipo-req.component.html',
  styleUrls: ['./editar-tipo-req.component.css']
})
export class EditarTipoReqComponent implements OnInit {

  updateReqFrom: FormGroup | any;
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

    this.catRest.editTiporeq(id).subscribe(
      (response) =>{
        console.log(response);
        
        this.updateReqFrom.patchValue({
        'cod': response.data.cod,
        'tiporeq': response.data.tiporeq,
        'id_categoria': response.data.id_categoria
        
        })
      },
      (error) => console.log(error)
    );
    
    console.log(this.data);

    this.updateReqFrom = new FormGroup({
      'cod': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'tiporeq': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'id_categoria': new FormControl(null, [Validators.required, Validators.minLength(3)]),
         
      
    });


}
      get cod() { return this.updateReqFrom.get('cod'); }
      get tiporeq() { return this.updateReqFrom.get('tiporeq'); }
      get id_categoria() { return this.updateReqFrom.get('id_categoria'); }
     

      updateCatDetails(){
        let id = this.route.snapshot.params.id;
        this.catRest.updateTiporeq(this.updateReqFrom,id).subscribe(
          (response) => {
            console.log(response),
            this.router.navigate(['/listar-tipo-req'])
          },
          (error) => console.log(error),
          () => console.log('completed')
        );
      }


}