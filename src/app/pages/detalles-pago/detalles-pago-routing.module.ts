import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesPagoComponent } from './detalles-pago.component';

const routes: Routes = [{ path: '', component: DetallesPagoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallesPagoRoutingModule { }
