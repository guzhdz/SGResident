import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarResidenteRoutingModule } from './agregar-residente-routing.module';
import { AgregarResidenteComponent } from './agregar-residente.component';


@NgModule({
  declarations: [
    AgregarResidenteComponent
  ],
  imports: [
    CommonModule,
    AgregarResidenteRoutingModule
  ]
})
export class AgregarResidenteModule { }
