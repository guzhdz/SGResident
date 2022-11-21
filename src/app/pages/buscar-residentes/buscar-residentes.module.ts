import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscarResidentesRoutingModule } from './buscar-residentes-routing.module';
import { BuscarResidentesComponent } from './buscar-residentes.component';


@NgModule({
  declarations: [
    BuscarResidentesComponent
  ],
  imports: [
    CommonModule,
    BuscarResidentesRoutingModule
  ]
})
export class BuscarResidentesModule { }
