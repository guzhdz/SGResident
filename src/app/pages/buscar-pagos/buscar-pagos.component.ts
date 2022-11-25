import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagoDom } from 'src/app/shared/interfaces/pagoDom.interface';
import { BdService } from 'src/app/shared/services/bd.service';

@Component({
  selector: 'app-buscar-pagos',
  templateUrl: './buscar-pagos.component.html',
  styleUrls: ['./buscar-pagos.component.scss']
})
export class BuscarPagosComponent implements OnInit {

  pagos: PagoDom[] = [ ]
  buscar: string = "";

  aparece = "show";

  constructor(private bdSvc: BdService, private router: Router) { }

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

  async eliminarPago(id: number) {
      let subs = await this.bdSvc.deshabilitarPago(false, id).subscribe();

      setTimeout(() => {subs.unsubscribe();
         this.buscarPago();}, 400);
  }

}
