import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesResienteRoutingModule } from './detalles-resiente-routing.module';
import { DetallesResienteComponent } from './detalles-resiente.component';


@NgModule({
  declarations: [
    DetallesResienteComponent
  ],
  imports: [
    CommonModule,
    DetallesResienteRoutingModule
  ]
})
export class DetallesResienteModule { }
