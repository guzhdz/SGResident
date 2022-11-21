import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecuperarRoutingModule } from './recuperar-routing.module';
import { RecuperarComponent } from './recuperar.component';


@NgModule({
  declarations: [
    RecuperarComponent
  ],
  imports: [
    CommonModule,
    RecuperarRoutingModule
  ]
})
export class RecuperarModule { }
