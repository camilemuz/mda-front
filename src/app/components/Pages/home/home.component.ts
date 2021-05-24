import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComuRestService } from 'src/app/services/comu-rest.service';
import { SoporteRestService } from 'src/app/services/soporte-rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  
})
export class HomeComponent implements OnInit {
  sopForm:any;
  
  userList:any[]=[];
  tipoList:any[]=[];
  calList:any[]=[];
 prioList:any[]=[];
  dptoList:any[]=[];
  estList:any[]=[];
  catList:any[]=[];
  munList:any[]=[];
  sucList:any[]=[];
  
  
  dataUser:any;

  private url='http://mda-back.test/api';
 

constructor(
  private sopRest:SoporteRestService,
  private comunRest:ComuRestService, 
 public http:HttpClient, 
  private formBuilder: FormBuilder, 
  private router: Router, 
  private route: ActivatedRoute) {

    var user:any=localStorage.getItem('currentUser');
    this.dataUser=JSON.parse(user);
    console.log('users',user,this.dataUser);
    this.comunRest.get('/user').subscribe((data)=>{
    console.log(data);
    this.userList=data.data;
  });
  this.comunRest.get('/tipo').subscribe((data)=>{
    console.log(data);
    this.tipoList=data.data;
  });
  this.comunRest.get('/q').subscribe((data)=>{
    console.log(data);
    this.calList=data.data;
  });
  this.comunRest.get('/prioridad').subscribe((data)=>{
    console.log(data);
    this.prioList=data.data;
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
    this.sopForm.controls['id_user'].setValue(this.dataUser.nombre);
  });
 
  // http.get(this.url+'/sucursal').subscribe((data)=>{
  //   console.log(data);
  //   this.sucList=data;

    // console.log('rrrr',this.dataUser.nombre);
    
   
  
  // });

  // http.get(this.url+'/filtro').subscribe((data)=>{
  //   console.log(data);
  //   this.sucList=data;

  // });

 



      

    
}
        ngOnInit(): void {
      this.sopForm = new FormGroup({
        'descripcion': new FormControl(null, []),  
        'interno': new FormControl(null, []),      
        'id_user': new FormControl(null, []),
        'id_tiporeq': new FormControl(null, []),
        'id_departamento': new FormControl(null, []),
        
        
        

      }      
      ); 
  
      
    } 

    

    get descripcion() { return this.sopForm.get('descripcion'); }  
    get id_tiporeq() { return this.sopForm.get('id_tiporeq'); }    
    get id_departamento() { return this.sopForm.get('id_departamento'); }
    get id_user() { return this.sopForm.get('id_user'); }
    get interno() { return this.sopForm.get('interno'); }
    

    
    

    Register() {
      //  console.log("desde controller",this.sopForm);
      this.sopRest.storeReq(this.sopForm).subscribe(() => {      

        this.router.navigate(['listar-ticket']);
  
      })
      

     }

     filtroChange(e:any){
       console.log('aaaa?',e.target.value);
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
      console.log('bbbbb',c.target.value);
      
       this.comunRest.get('/filtrocat/'+c.target.value).subscribe(respo => {
         console.log('respo', respo);
         this.tipoList=respo.data;
         
       }, error=>{
         console.log('erro', error);
         
       })
      
      
      
    }

    
}

    

    
        
    
  


