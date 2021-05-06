import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  
})
export class HomeComponent implements OnInit {
 form; 

  
  constructor (private formBuilder: FormBuilder){
    this.form=formBuilder.group({
     


    })
   }
  
  ngOnInit(): void{
   

    }
    
  

    

    
        
    
  
}

