import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogoRestService } from 'src/app/services/catalogo-rest.service';
import { ComuRestService } from 'src/app/services/comu-rest.service';

@Component({
  selector: 'app-editar-tipo-req',
  templateUrl: './editar-tipo-req.component.html',
  styleUrls: ['./editar-tipo-req.component.css']
})
export class EditarTipoReqComponent implements OnInit {

  updateReqFrom: FormGroup | any;
  serverErrors = [];
  catList:any;
  divList:any;
  @Input() data: any;

  private url='http://mda-back.test/api';
  constructor(
    private comunRest: ComuRestService,
    private route: ActivatedRoute,
     private catRest: CatalogoRestService,
     private router: Router,
     public http: HttpClient ) { 
      this.comunRest.get('/cat').subscribe((data)=>{
        console.log(data);
        this.catList=data.data;
      });

      this.comunRest.get('/div').subscribe((data)=>{
        console.log(data);
        this.divList=data.data;
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
        'id_categoria': response.data.id_categoria,
        'id_division': response.data.id_division
        
        })
      },
      (error) => console.log(error)
    );
    
    console.log(this.data);

    this.updateReqFrom = new FormGroup({
      'cod': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'tiporeq': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'id_categoria': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'id_division': new FormControl(null, [Validators.required, Validators.minLength(3)]),
         
      
    });


}
      get cod() { return this.updateReqFrom.get('cod'); }
      get tiporeq() { return this.updateReqFrom.get('tiporeq'); }
      get id_categoria() { return this.updateReqFrom.get('id_categoria'); }
      get id_division() { return this.updateReqFrom.get('id_division'); }
     

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