import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog'

@NgModule({
    exports :[
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatDialogModule
    ]
})

export class MaterialModule {}