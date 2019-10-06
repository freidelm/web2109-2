import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss']
})
export class LibroComponent implements OnInit {
  
  submitted = false;
  titulo ='Formulario Libros';

  constructor() { }

  ngOnInit() {
  }

}
