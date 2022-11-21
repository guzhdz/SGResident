import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscarPagosRoutingModule } from './buscar-pagos-routing.module';
import { BuscarPagosComponent } from './buscar-pagos.component';


@NgModule({
  declarations: [
    BuscarPagosComponent
  ],
  imports: [
    CommonModule,
    BuscarPagosRoutingModule
  ]
})
export class BuscarPagosModule { }
