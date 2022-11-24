import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalComponent } from './principal.component';
import { MaterialModule } from '../../material.module';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';


@NgModule({
  declarations: [
    PrincipalComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class PrincipalModule { }

