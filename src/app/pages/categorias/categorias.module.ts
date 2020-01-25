import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';


@NgModule({
  declarations: [CategoriaFormComponent, CategoriaListComponent],
  imports: [
    CommonModule,
    CategoriasRoutingModule
  ]
})
export class CategoriasModule { }
