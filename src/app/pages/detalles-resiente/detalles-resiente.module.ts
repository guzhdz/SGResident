import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesResienteRoutingModule } from './detalles-resiente-routing.module';
import { DetallesResienteComponent } from './detalles-resiente.component';
import { MaterialModule } from '../../material.module';
import { ComponentsModule } from '../../components.module';


@NgModule({
  declarations: [
    DetallesResienteComponent
  ],
  imports: [
    CommonModule,
    DetallesResienteRoutingModule,
    MaterialModule,
    ComponentsModule
  ]
})
export class DetallesResienteModule { }
