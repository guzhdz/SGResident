import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModificarPagoComponent } from './modificar-pago.component';

const routes: Routes = [{ path: '', component: ModificarPagoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModificarPagoRoutingModule { }
