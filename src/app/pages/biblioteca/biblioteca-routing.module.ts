import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BibliotecaComponent } from './biblioteca.component';
import { AutoresComponent } from './autores/autores.component';
import { EditorialComponent } from './editorial/editorial.component';
import { ExistenciaComponent } from './existencia/existencia.component';
import { LibroComponent } from './libro/libro.component';
import { TipoComponent } from './tipo/tipo.component';
import { AreasComponent } from './areas/areas.component';

const routes: Routes = [
{
  path: 'biblioteca',
  component: BibliotecaComponent
},
{
  path: 'autores',
  component: AutoresComponent
},
{
  path: 'editorial',
  component: EditorialComponent
},
{
  path: 'existencia',
  component: ExistenciaComponent
},
{
  path: 'libro',
  component: LibroComponent
},
{
  path: 'tipo',
  component: TipoComponent
},
{
  path: 'areas',
  component: AreasComponent
},


];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class BibliotecaRoutingModule { }
