import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogInRoutingModule } from './log-in-routing.module';
import { LogInComponent } from './log-in.component';
import { MaterialModule } from 'src/app/material.module';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    LogInComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    LogInRoutingModule,
    MaterialModule
  ]
})
export class LogInModule { }
