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

  constructor() { }
  
  ngOnInit() {
  }

  

}
