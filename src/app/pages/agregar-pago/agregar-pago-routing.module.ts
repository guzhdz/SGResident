import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarPagoComponent } from './agregar-pago.component';

const routes: Routes = [{ path: '', component: AgregarPagoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgregarPagoRoutingModule { }
