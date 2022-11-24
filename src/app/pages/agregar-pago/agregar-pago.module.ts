import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarPagoRoutingModule } from './agregar-pago-routing.module';
import { AgregarPagoComponent } from './agregar-pago.component';
import { MaterialModule } from 'src/app/material.module';
import { PrincipalModule } from '../principal/principal.module';


@NgModule({
  declarations: [
    AgregarPagoComponent
  ],
  imports: [
    CommonModule,
    AgregarPagoRoutingModule,
    MaterialModule,
    PrincipalModule
  ]
})
export class AgregarPagoModule { }
