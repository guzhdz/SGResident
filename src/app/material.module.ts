import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import { FormsModule } from '@angular/forms';

@NgModule({
    exports :[
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule
    ]
})

export class MaterialModule {}