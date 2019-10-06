import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.scss']
})
export class TipoComponent implements OnInit {

  submitted = false;
  titulo ='Formulario Tipo';

  constructor() { }

  ngOnInit() {
  }

}
