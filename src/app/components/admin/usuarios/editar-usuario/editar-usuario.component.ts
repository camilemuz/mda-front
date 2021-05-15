import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CargoRestService } from 'src/app/services/cargo-rest.service';
import { UserRestService } from 'src/app/services/user-rest.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  updateUser: FormGroup | any;
  serverErrors = [];
  userList:any;
  cargoList:any;
  @Input() data: any;

  private url='http://mda-back.test/api';
  constructor(
    private route: ActivatedRoute,
     private userRest: UserRestService,
     private cargoRest:CargoRestService, 
     private router: Router,
     public http: HttpClient ) { 
      http.get(this.url+'/cargo').subscribe((data)=>{
        console.log(data);
        this.cargoList=data;
      });
     }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    console.log(id);

    this.userRest.editUser(id).subscribe(
      (response) =>{
        console.log(response);
        
        this.updateUser.patchValue({
        'nombre': response.data.nombre,
        'ap_paterno': response.data.ap_paterno,
        'ap_materno': response.data.ap_materno,
        'unidad':response.data.unidad,
        'rol':response.data.rol,
        "cargo":response.data.cargo
        // 'email':response.data.email
        })
      },
      (error) => console.log(error)
    );
    
    console.log(this.data);

    this.updateUser = new FormGroup({
      'nombre': new FormControl(null, [Validators.required, Validators.minLength(3)]),
          'ap_paterno': new FormControl(null, [Validators.required, Validators.minLength(3)]),
          'ap_materno': new FormControl(null,[]),
          // 'email': new FormControl(null, [Validators.required, Validators.email]),
          'rol': new FormControl(null, [Validators.required]),
          'cargo': new FormControl(null, [Validators.required]),
          'unidad':new FormControl(null, )
      
    });


}
      get nombre() { return this.updateUser.get('nombre'); }
      get ap_paterno() { return this.updateUser.get('ap_paterno'); }
      get ap_materno() { return this.updateUser.get('ap_materno'); }
      // get email() { return this.updateUser.get('email'); }
      get rol() { return this.updateUser.get('rol'); }
      get cargo() { return this.updateUser.get('cargo'); }
      get unidad() { return this.updateUser.get('unidad'); }

      updateUserDetails(){
        let id = this.route.snapshot.params.id;
        this.userRest.updateUser(this.updateUser,id).subscribe(
          (response) => {
            console.log(response),
            this.router.navigate(['/usuario'])
          },
          (error) => console.log(error),
          () => console.log('completed')
        );
      }


}
