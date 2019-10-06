import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html'
})
export class EditorialComponent implements OnInit {

  
  submitted = false;
  titulo ='Formulario Editorial';

  constructor() { }

  ngOnInit() {
  }

}
