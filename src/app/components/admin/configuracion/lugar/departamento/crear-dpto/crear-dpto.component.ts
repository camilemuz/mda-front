import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LugarRestService } from 'src/app/services/lugar-rest.service';

@Component({
  selector: 'app-crear-dpto',
  templateUrl: './crear-dpto.component.html',
  styleUrls: ['./crear-dpto.component.css']
})
export class CrearDptoComponent implements OnInit {

 dptoForm:any;
  dptoList:any;
  private url='http://mda-back.test/api';

constructor( 
  private lugarRest:LugarRestService,
  http:HttpClient, 
  private formBuilder: FormBuilder,  
  private router: Router, 
  private route: ActivatedRoute) {
  http.get(this.url+'/dpto').subscribe((data)=>{
    console.log(data);
    this.dptoList=data;
  });


}
        ngOnInit(): void {
      this.dptoForm = new FormGroup({
        'cod': new FormControl(null, [Validators.required, Validators.minLength(3)]),
        'departamento': new FormControl(null, [Validators.required, Validators.minLength(3)]),
        
      }
      ); }

     
      


    get cod() { return this.dptoForm.get('cod'); }
    get departamento() { return this.dptoForm.get('departamento'); }
    

    Register() {
      // console.log("desde controller",this.dptoForm);
      this.lugarRest.storeDpto(this.dptoForm).subscribe(() => {      
        this.router.navigate(['listar-dpto']);
  
      })
      

     }
 



}