import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturasRoutingModule } from './facturas-routing.module';
import { FacturasComponent } from './facturas.component';
import { ComponentsModule } from 'src/app/components.module';


@NgModule({
  declarations: [
    FacturasComponent
  ],
  imports: [
    CommonModule,
    FacturasRoutingModule,
    ComponentsModule
  ]
})
export class FacturasModule { }
