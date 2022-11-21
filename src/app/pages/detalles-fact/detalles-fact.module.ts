import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesFactRoutingModule } from './detalles-fact-routing.module';
import { DetallesFactComponent } from './detalles-fact.component';


@NgModule({
  declarations: [
    DetallesFactComponent
  ],
  imports: [
    CommonModule,
    DetallesFactRoutingModule
  ]
})
export class DetallesFactModule { }
