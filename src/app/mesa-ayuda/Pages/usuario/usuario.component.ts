import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRestService } from 'src/app/services/user-rest.service';



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  private url='http://mda-back.test/api';
  userList:any;
  
  


  constructor(private userRest:UserRestService, http:HttpClient, private formBuilder: FormBuilder,  private router: Router, private route: ActivatedRoute){
    http.get(this.url+'/user').subscribe((data)=>{
      console.log(data);
      this.userList=data;
    });
  
 
}
  ngOnInit(): void {
    this.userRest.getUsers().subscribe(
      (response)=>{console.log(this. userList=response.user);},
    
      (error)=> {console.log(error)}
      );
  }
  // recuperarTodos(){
  //   this.auth.recuperarTodos().subscribe(result => this.user=result);
  // }
  deleteUser(id:number){
    if(confirm("¿Desea eliminar usuario?")){
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



