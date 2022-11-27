import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarResidenteRoutingModule } from './agregar-residente-routing.module';
import { AgregarResidenteComponent } from './agregar-residente.component';
import { MaterialModule } from '../../material.module';
import { ComponentsModule} from '../../components.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOption } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';



import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
    declarations: [
        AgregarResidenteComponent
    ],
    imports: [
        CommonModule,
        AgregarResidenteRoutingModule,
        MaterialModule,
        ComponentsModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        MatDatepickerModule,
        FormsModule,
        MatSelectModule,
    ]
})
export class AgregarResidenteModule { }

