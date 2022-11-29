import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecuperarRoutingModule } from './recuperar-routing.module';
import { RecuperarComponent } from './recuperar.component';
import { ComponentsModule } from 'src/app/components.module';
import { MaterialModule } from '../../material.module';
import { RecuperarAlertComponent } from './components/recuperar-alert/recuperar-alert.component';


@NgModule({
  declarations: [
    RecuperarComponent,
    RecuperarAlertComponent
  ],
  imports: [
    CommonModule,
    RecuperarRoutingModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class RecuperarModule { }
