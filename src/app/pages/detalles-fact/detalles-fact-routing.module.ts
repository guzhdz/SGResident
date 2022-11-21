import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesFactComponent } from './detalles-fact.component';

const routes: Routes = [{ path: '', component: DetallesFactComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallesFactRoutingModule { }
