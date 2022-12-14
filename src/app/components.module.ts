import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/components/header/header.component';
import { MaterialModule } from './material.module';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
      CommonModule,
      MaterialModule
    ],
    exports: [
      HeaderComponent
    ]
  })
  export class ComponentsModule { }