import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarPagoRoutingModule } from './agregar-pago-routing.module';
import { AgregarPagoComponent } from './agregar-pago.component';
import { MaterialModule } from 'src/app/material.module';
import { ComponentsModule } from 'src/app/components.module';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    AgregarPagoComponent
  ],
  imports: [
    CommonModule,
    AgregarPagoRoutingModule,
    MaterialModule,
    ComponentsModule,
    MatSelectModule
 
  ]
})
export class AgregarPagoModule { }
