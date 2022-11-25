import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscarPagosRoutingModule } from './buscar-pagos-routing.module';
import { BuscarPagosComponent } from './buscar-pagos.component';
import { MaterialModule } from '../../material.module';
import { ComponentsModule } from '../../components.module';


@NgModule({
  declarations: [
    BuscarPagosComponent
  ],
  imports: [
    CommonModule,
    BuscarPagosRoutingModule,
    MaterialModule,
    ComponentsModule
  ]
})
export class BuscarPagosModule { }
