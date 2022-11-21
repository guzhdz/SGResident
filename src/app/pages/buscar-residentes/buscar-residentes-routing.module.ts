import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarResidentesComponent } from './buscar-residentes.component';

const routes: Routes = [{ path: '', component: BuscarResidentesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscarResidentesRoutingModule { }
