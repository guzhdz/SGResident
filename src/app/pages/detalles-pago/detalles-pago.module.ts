import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesPagoRoutingModule } from './detalles-pago-routing.module';
import { DetallesPagoComponent } from './detalles-pago.component';
import { MaterialModule } from '../../material.module';
import { ComponentsModule } from '../../components.module';


@NgModule({
  declarations: [
    DetallesPagoComponent
  ],
  imports: [
    CommonModule,
    DetallesPagoRoutingModule,
    MaterialModule,
    ComponentsModule
  ]
})
export class DetallesPagoModule { }
