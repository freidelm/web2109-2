import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.scss']
})
export class TipoComponent implements OnInit {

  submitted = false;
  titulo ='Formulario Tipo';
  tipoForm: FormGroup;

  constructor(protected fb:FormBuilder) { }

  ngOnInit() {
  }

  createForm(){
    this.tipoForm = this.fb.group({
      id: '',
      descripcion: '',
    })
  }

}
