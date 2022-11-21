import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesPagoRoutingModule } from './detalles-pago-routing.module';
import { DetallesPagoComponent } from './detalles-pago.component';


@NgModule({
  declarations: [
    DetallesPagoComponent
  ],
  imports: [
    CommonModule,
    DetallesPagoRoutingModule
  ]
})
export class DetallesPagoModule { }
