import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificarPagoRoutingModule } from './modificar-pago-routing.module';
import { ModificarPagoComponent } from './modificar-pago.component';


@NgModule({
  declarations: [
    ModificarPagoComponent
  ],
  imports: [
    CommonModule,
    ModificarPagoRoutingModule
  ]
})
export class ModificarPagoModule { }
