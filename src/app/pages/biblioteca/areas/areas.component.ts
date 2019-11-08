import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html'
})
export class AreasComponent implements OnInit {

  areas: FormGroup;
  submitted = false;
  titulo ='Formulario Areas';

  areaForm: FormGroup;

  constructor(protected fb:FormBuilder) { 
    this.createForm();
  }
  
  ngOnInit() {
  }
  createForm(){
    this.areaForm = this.fb.group({      
      code: ['', Validators.required],
      descrption: ['', Validators.required],
    })
  }

  

}
