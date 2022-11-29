import { Component, OnInit } from '@angular/core';
import { Residente } from '../../shared/interfaces/residente.interface';
import { BdService } from '../../shared/services/bd.service';
import { PagoDom } from '../../shared/interfaces/pagoDom.interface';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RecuperarAlertComponent } from './components/recuperar-alert/recuperar-alert.component';
import { AlertaEliminarComponent } from './components/alerta-eliminar/alerta-eliminar.component';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.scss']
})
export class RecuperarComponent implements OnInit {

  residentes : Residente[] = [];
  pagos: PagoDom[] = [];
  buscar = "";
  aparece = "show";
  constructor(private bdSvc: BdService, private router: Router, public alerta: MatDialog) { }

  ngOnInit(): void {
    this.buscarResidente();
    this.buscarPago();
  }

  buscarG() {
    this.buscarResidente();
    this.buscarPago();
  }

  obtenerResidentes() {
    let subs = this.bdSvc.obtenerResidentesH(false).subscribe((value: Residente[]) => {
      this.residentes = value;
    });

    setTimeout(() => {subs.unsubscribe()}, 1000);
  }

  buscarResidente() {
    if(this.buscar == "") 
      this.obtenerResidentes()
    else {
      let subs = this.bdSvc.obtenerResidenteNom2(this.buscar.toLocaleLowerCase()).subscribe((value) => {
        this.residentes = value;
      });

      setTimeout(() => {subs.unsubscribe()}, 1000);
    }
  }

  obtenerPagos() {
    let subs = this.bdSvc.obtenerPagosDomG(false).subscribe((value: PagoDom[]) => {
      this.pagos = value;
    });

    setTimeout(() => {subs.unsubscribe()}, 1000);
  }

  buscarPago() {
    if(this.buscar == "") 
      this.obtenerPagos()
    else {
      let subs = this.bdSvc.obtenerPagosDomE2(this.buscar.toLocaleLowerCase()).subscribe((value: PagoDom[]) => {
        this.pagos = value;
      });

      setTimeout(() => {subs.unsubscribe()}, 1000);
    }
  }

  irADetallesR(id_res: number) {
    this.router.navigate(['/detalles-residente'], {queryParams: {id_res: id_res, eliminados: true}});
  }

  irADetallesP(folio: number) {
    this.router.navigate(['/detalles-pago'], {queryParams: {folio: folio, eliminados: true}});
  }

  async recuperarAlerta(nombre: string, tipo: string, id: number) {
    const dialogRef = this.alerta.open(RecuperarAlertComponent, {
      width: '400px',
      height: '250px',
      data: {nombre: nombre, borrar: true, tipo: tipo},
    });

    await dialogRef.afterClosed().subscribe(result => {
      if(result.borrar)
        if(result.tipo == "residente") {
          let subs = this.bdSvc.deshabilitarResidente(true, id).subscribe((value) => {});

          setTimeout(() => {this.buscarG()}, 300);
      
          setTimeout(() => {subs.unsubscribe()}, 1000);

        } else if(result.tipo == "pago") {
          let subs = this.bdSvc.deshabilitarPago(true, id).subscribe((value) => {});

          setTimeout(() => {this.buscarG()}, 300);
      
          setTimeout(() => {subs.unsubscribe()}, 1000); 
        }
    });
  }

  async eliminarAlerta(id: number, nombre: string, tipo: string, id_casa: number) {
    const dialogRef = this.alerta.open(AlertaEliminarComponent, {
      width: '400px',
      height: '250px',
      data: {nombre: nombre, borrar: true, tipo: tipo},
    });

    await dialogRef.afterClosed().subscribe(result => {
      if(result.borrar)
        if(result.tipo == "residente") {
          let subs2 = this.bdSvc.eliminarPagoR(id).subscribe((value) => {});
          let subs = this.bdSvc.eliminarResidente(id).subscribe((value) => {});
          let subs3 = this.bdSvc.eliminarCasa(id_casa).subscribe((value) => {
            console.log(value);
          });


          setTimeout(() => {this.buscarG()}, 400);
      
          setTimeout(() => {
            subs3.unsubscribe();
            subs2.unsubscribe();
            subs.unsubscribe();
          }, 1000);

        } else if(result.tipo == "pago") {
          let subs = this.bdSvc.eliminarPago(id).subscribe((value) => {});

          setTimeout(() => {this.buscarG()}, 400);
      
          setTimeout(() => {subs.unsubscribe()}, 1000); 
        }
    });
  }

}
