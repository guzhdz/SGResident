import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalComponent } from './principal.component';
import { MaterialModule } from '../../material.module';
import { ComponentsModule } from '../../components.module';


@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    MaterialModule,
    ComponentsModule
  ]
})
export class PrincipalModule { }
