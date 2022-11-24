import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscarPagosRoutingModule } from './buscar-pagos-routing.module';
import { BuscarPagosComponent } from './buscar-pagos.component';
import { ComponentsModule } from 'src/app/components.module';


@NgModule({
  declarations: [
    BuscarPagosComponent
  ],
  imports: [
    CommonModule,
    BuscarPagosRoutingModule,
    ComponentsModule
  ]
})
export class BuscarPagosModule { }
