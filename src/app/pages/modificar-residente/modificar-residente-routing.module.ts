import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModificarResidenteComponent } from './modificar-residente.component';

const routes: Routes = [{ path: '', component: ModificarResidenteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModificarResidenteRoutingModule { }
