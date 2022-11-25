import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarPagoRoutingModule } from './agregar-pago-routing.module';
import { AgregarPagoComponent } from './agregar-pago.component';
import { MaterialModule } from 'src/app/material.module';
import { PrincipalModule } from '../principal/principal.module';
import { ComponentsModule } from '../../components.module';


@NgModule({
  declarations: [
    AgregarPagoComponent
  ],
  imports: [
    CommonModule,
    AgregarPagoRoutingModule,
    MaterialModule,
    ComponentsModule
  ]
})
export class AgregarPagoModule { }
