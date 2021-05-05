import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRestService } from 'src/app/services/user-rest.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  updateUser: FormGroup | any;
  serverErrors = [];
  @Input() data: any;

  constructor(
    private route: ActivatedRoute,
     private userRest: UserRestService, 
     private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
     this.userRest.editUser(id).subscribe(
      (response) => {
        this.updateUser.patchValue({
          'nombre': response.user.nombre,
          'email':response.user.email
        })
      },
      (error) => console.log(error)
    );

    console.log(this.data);

    this.updateUser = new FormGroup({
      'nombre': new FormControl(null, [Validators.required, Validators.minLength(3)]),
          'ap_paterno': new FormControl(null, [Validators.required, Validators.minLength(3)]),
          'ap_materno': new FormControl(null,[]),
          'email': new FormControl(null, [Validators.required, Validators.email]),
          'rol': new FormControl(null, [Validators.required]),
      
    });
}
get nombre() { return this.updateUser.get('nombre'); }
get ap_paterno() { return this.updateUser.get('ap_paterno'); }
get ap_materno() { return this.updateUser.get('ap_materno'); }
get email() { return this.updateUser.get('email'); }
get rol() { return this.updateUser.get('rol'); }


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
