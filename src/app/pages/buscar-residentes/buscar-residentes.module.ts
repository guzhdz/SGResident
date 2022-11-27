import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscarResidentesRoutingModule } from './buscar-residentes-routing.module';
import { BuscarResidentesComponent } from './buscar-residentes.component';
import { ComponentsModule } from '../../components.module';
import { MaterialModule } from '../../material.module';
import { AlertaEliminarComponent } from './components/alerta-eliminar/alerta-eliminar.component';


@NgModule({
  declarations: [
    BuscarResidentesComponent,
    AlertaEliminarComponent
  ],
  imports: [
    CommonModule,
    BuscarResidentesRoutingModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class BuscarResidentesModule { }
