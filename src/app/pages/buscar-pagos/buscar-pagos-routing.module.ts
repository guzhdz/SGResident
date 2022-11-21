import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPagosComponent } from './buscar-pagos.component';

const routes: Routes = [{ path: '', component: BuscarPagosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscarPagosRoutingModule { }
