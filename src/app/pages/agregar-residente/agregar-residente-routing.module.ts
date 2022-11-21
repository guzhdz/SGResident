import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarResidenteComponent } from './agregar-residente.component';

const routes: Routes = [{ path: '', component: AgregarResidenteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgregarResidenteRoutingModule { }
