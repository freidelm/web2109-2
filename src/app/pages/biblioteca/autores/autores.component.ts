import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutoresService } from 'src/app/services/autores.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html'
})
export class AutoresComponent implements OnInit {
  
  submitted = false;
  titulo ='Formulario Autores';
  code = 'Code'
  name = 'Name';
  lastname = 'LastName';
  bd_year = 'Fecha Nacimineto';
  death_year = 'Fecha Muerte';
  bd_place = 'Lugar de Nacimiento';

  public autores: any
    
  
  autoresForm: FormGroup;

  constructor(protected fb:FormBuilder,
    protected service:AutoresService
    ) { 
    this.createForm();

  }

  ngOnInit() {
    this.service.getAutores().subscribe(data=>{
      this.autores=data;
    })

  
  }

  saveAutores(){
    this.service.postAutores(this.autoresForm.value).subscribe(data=>
      alert("Listo")
    )
  }

  createForm(){
    this.autoresForm = this.fb.group({      
      code: ['', Validators.required],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      bd_year: ['', Validators.required],
      death_year: ['', Validators.required],
      bd_place: ['', Validators.required],
    })
  }

}
