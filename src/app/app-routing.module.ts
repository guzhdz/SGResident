import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./pages/log-in/log-in.module').then(m => m.LogInModule) }, 
  { path: 'principal', loadChildren: () => import('./pages/principal/principal.module').then(m => m.PrincipalModule) }, 
  { path: 'buscar-residentes', loadChildren: () => import('./pages/buscar-residentes/buscar-residentes.module').then(m => m.BuscarResidentesModule) }, 
  { path: 'buscar-pagos', loadChildren: () => import('./pages/buscar-pagos/buscar-pagos.module').then(m => m.BuscarPagosModule) }, 
  { path: 'agregar-pago', loadChildren: () => import('./pages/agregar-pago/agregar-pago.module').then(m => m.AgregarPagoModule) }, 
  { path: 'agregar-residente', loadChildren: () => import('./pages/agregar-residente/agregar-residente.module').then(m => m.AgregarResidenteModule) }, 
  { path: 'modificar-residente', loadChildren: () => import('./pages/modificar-residente/modificar-residente.module').then(m => m.ModificarResidenteModule) }, 
  { path: 'modificar-pago', loadChildren: () => import('./pages/modificar-pago/modificar-pago.module').then(m => m.ModificarPagoModule) }, 
  { path: 'detalles-pago', loadChildren: () => import('./pages/detalles-pago/detalles-pago.module').then(m => m.DetallesPagoModule) }, 
  { path: 'detalles-residente', loadChildren: () => import('./pages/detalles-resiente/detalles-resiente.module').then(m => m.DetallesResienteModule) }, 
  { path: 'recuperar', loadChildren: () => import('./pages/recuperar/recuperar.module').then(m => m.RecuperarModule) }, 
  { path: 'facturas', loadChildren: () => import('./pages/facturas/facturas.module').then(m => m.FacturasModule) }, 
  { path: 'detalles-fact', loadChildren: () => import('./pages/detalles-fact/detalles-fact.module').then(m => m.DetallesFactModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
