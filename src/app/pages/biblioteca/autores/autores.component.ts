import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html'
})
export class AutoresComponent implements OnInit {
  
  submitted = false;
  titulo ='Formulario Autores';
  nombres = 'Nombres';
  apellidos = 'Apellidos';
  fecha = 'Fecha';
  nacionalidad = 'Nacionalidad';
  
  
  constructor() { }

  ngOnInit() {
  }

  saveForm(){
    alert(this.nombres);
  }

}
