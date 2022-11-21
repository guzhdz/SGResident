import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarPagoRoutingModule } from './agregar-pago-routing.module';
import { AgregarPagoComponent } from './agregar-pago.component';


@NgModule({
  declarations: [
    AgregarPagoComponent
  ],
  imports: [
    CommonModule,
    AgregarPagoRoutingModule
  ]
})
export class AgregarPagoModule { }
