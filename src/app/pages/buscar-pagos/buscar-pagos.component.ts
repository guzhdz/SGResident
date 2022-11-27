import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PagoDom } from 'src/app/shared/interfaces/pagoDom.interface';
import { BdService } from 'src/app/shared/services/bd.service';
import { AlertaEliminarComponent } from './components/alerta-eliminar/alerta-eliminar.component';

@Component({
  selector: 'app-buscar-pagos',
  templateUrl: './buscar-pagos.component.html',
  styleUrls: ['./buscar-pagos.component.scss']
})
export class BuscarPagosComponent implements OnInit {

  pagos: PagoDom[] = [ ]
  buscar: string = "";

  aparece = "show";

  constructor(private bdSvc: BdService, private router: Router, public alerta: MatDialog) { }

  ngOnInit(): void {
    this.buscarPago()
  }

  obtenerPagos() {
    let subs = this.bdSvc.obtenerPagosDomG(true).subscribe((value: PagoDom[]) => {
      this.pagos = value;
    });

    setTimeout(() => {subs.unsubscribe()}, 1000);
  }

  buscarPago() {
    if(this.buscar == "") 
      this.obtenerPagos()
    else {
      let subs = this.bdSvc.obtenerPagosDomE(this.buscar.toLocaleLowerCase()).subscribe((value: PagoDom[]) => {
        this.pagos = value;
      });

      setTimeout(() => {subs.unsubscribe()}, 1000);
    }
  }

  irA(ruta: string) {
    this.router.navigate([ruta]);
  }

  irADetalles(folio: number) {
    this.router.navigate(['/detalles-pago'], {queryParams: {folio: folio}});
  }

  async eliminarAlerta(id: number, dom: string) {
    const dialogRef = this.alerta.open(AlertaEliminarComponent, {
      width: '400px',
      height: '200px',
      data: {dom: dom, borrar: true},
    });

    await dialogRef.afterClosed().subscribe(result => {
      if(result.borrar)
      this.eliminarPago(id);
    });
  }

  async eliminarPago(id: number) {
      let subs = await this.bdSvc.deshabilitarPago(false, id).subscribe();

      setTimeout(() => {this.buscarPago()}, 300);
      
      setTimeout(() => {subs.unsubscribe()}, 1000); 
  }

}
