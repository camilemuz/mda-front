import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  form:any;
  usuario: any;
  
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {


    this.form=formBuilder.group({
      nombre: ['',[Validators.required]],
      ap_paterno: ['',[Validators.required]],
      ap_materno: [''],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]],
      password_confirma: ['',[Validators.required]],
    });            
               }

  ngOnInit(): void {
    this.getUsuario();
  }
  getUsuario() {
    throw new Error('Method not implemented.');
  }
  submit() {
    if (this.form.valid) {
      this.usuario(this.form.get('nombre').value,this.form.get('ap_paterno').value,this.form.get('ap_materno').value,this.form.get('email').value,this.form.get('password').value,this.form.get('confirma_password').value);
      console.log(this.form.value);
    }    
  }

}
