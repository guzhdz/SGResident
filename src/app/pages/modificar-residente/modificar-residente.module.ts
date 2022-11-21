import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificarResidenteRoutingModule } from './modificar-residente-routing.module';
import { ModificarResidenteComponent } from './modificar-residente.component';


@NgModule({
  declarations: [
    ModificarResidenteComponent
  ],
  imports: [
    CommonModule,
    ModificarResidenteRoutingModule
  ]
})
export class ModificarResidenteModule { }
