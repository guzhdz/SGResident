import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecuperarRoutingModule } from './recuperar-routing.module';
import { RecuperarComponent } from './recuperar.component';
import { ComponentsModule } from 'src/app/components.module';


@NgModule({
  declarations: [
    RecuperarComponent
  ],
  imports: [
    CommonModule,
    RecuperarRoutingModule,
    ComponentsModule
  ]
})
export class RecuperarModule { }
