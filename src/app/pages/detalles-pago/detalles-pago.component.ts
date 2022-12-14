import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pago } from 'src/app/shared/interfaces/pago.interface';
import { Residente } from 'src/app/shared/interfaces/residente.interface';
import { BdService } from '../../shared/services/bd.service';
import { PagoDom } from '../../shared/interfaces/pagoDom.interface';

@Component({
  selector: 'app-detalles-pago',
  templateUrl: './detalles-pago.component.html',
  styleUrls: ['./detalles-pago.component.scss']
})
export class DetallesPagoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private bdSvc: BdService, private router: Router) { }

  pago: Pago = {
    fecha_pago: "",
    hora_pago: "",
    nombre_pag: "",
    apellido_p_pag: "",
    apellido_m_pag: "",
    concepto: "",
    cantidad_pagar: 0,
    tipo_pago: "",
    habilitado: true,
    id_res: 0
  }

  nombreResidente: string = "";
  domicilio: string = "";

  indicePago: number = 0;
  eliminados = false;

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos() {
    let subs = this.route.queryParams.subscribe((value) => {
      this.indicePago = parseInt(value['folio']);
      this.eliminados = value['eliminados'];
      let subs2 = this.bdSvc.obtenerPago(this.indicePago).subscribe((value: Pago[]) => {
        this.pago = value[0];
        let subs3 = this.bdSvc.obtenerResidente(this.pago.id_res).subscribe((value: Residente[]) => {
          this.nombreResidente = value[0].nombre + " " + value[0].apellido_p + " " + value[0].apellido_m;
          let subs4 = this.bdSvc.obtenerPagoDom(this.indicePago).subscribe((value: PagoDom[]) => {
            this.domicilio = value[0].num_dom;
            setTimeout(() => {
              subs3.unsubscribe();
              subs2.unsubscribe();
              subs.unsubscribe();
            }, 1000);
          });
        });
      });
    });
  }

  irA() {
    if(Boolean(this.eliminados)) {
      this.router.navigate(['/recuperar']);
    } else {
      this.router.navigate(['/buscar-pagos']);
    }
  }
}
