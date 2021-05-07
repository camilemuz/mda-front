import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRestService } from 'src/app/services/user-rest.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
  private url='http://mda-back.test/api';
  userList:any;
  
  


  constructor(private userRest:UserRestService, http:HttpClient, private formBuilder: FormBuilder,  private router: Router, private route: ActivatedRoute){
    http.get(this.url+'/user').subscribe((data)=>{
      console.log(data);
      this.userList=data;
    });
  
 
}
  ngOnInit(): void {
   
  }
  
  deleteUser(id:number){
    if(confirm("¿Desea eliminar usuario?")){
      console.log(id);
      
      this.userRest.deleteUser(id).subscribe(
        (response)=> console.log(response),
        (error)=>console.log(error)
      );
    
    }
  }
  editUser(id: number) {
    this.router.navigate(['/editar-usuario',id]);
  }


}
