import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesResienteComponent } from './detalles-resiente.component';

const routes: Routes = [{ path: '', component: DetallesResienteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallesResienteRoutingModule { }
