import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarResidenteRoutingModule } from './agregar-residente-routing.module';
import { AgregarResidenteComponent } from './agregar-residente.component';
import { MaterialModule } from '../../material.module';
import { ComponentsModule } from 'src/app/components.module';







@NgModule({
    declarations: [
        AgregarResidenteComponent,
    ],
    imports: [
        CommonModule,
        AgregarResidenteRoutingModule,
        MaterialModule,
        ComponentsModule,
    ]
})
export class AgregarResidenteModule { }

