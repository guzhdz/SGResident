import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesFactRoutingModule } from './detalles-fact-routing.module';
import { DetallesFactComponent } from './detalles-fact.component';
import { MaterialModule } from '../../material.module';
import { ComponentsModule } from '../../components.module';


@NgModule({
  declarations: [
    DetallesFactComponent
  ],
  imports: [
    CommonModule,
    DetallesFactRoutingModule,
    MaterialModule,
    ComponentsModule
  ]
})
export class DetallesFactModule { }
