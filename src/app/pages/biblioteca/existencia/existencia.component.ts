import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-existencia',
  templateUrl: './existencia.component.html',
  styleUrls: ['./existencia.component.scss']
})
export class ExistenciaComponent implements OnInit {

  submitted = false;
  titulo ='Formulario Existencia';

  constructor() { }

  ngOnInit() {
  }

}
