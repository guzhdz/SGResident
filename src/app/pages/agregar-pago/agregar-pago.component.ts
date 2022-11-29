import { Component, OnInit } from '@angular/core';
import { Pago } from 'src/app/shared/interfaces/pago.interface';
import { BdService } from 'src/app/shared/services/bd.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar-pago',
  templateUrl: './agregar-pago.component.html',
  styleUrls: ['./agregar-pago.component.scss']
})
export class AgregarPagoComponent implements OnInit {

  public ids = [];

  constructor(private bdSvc: BdService, private router: Router) { }


  datos: Pago={
    fecha_pago: '',
    hora_pago: '',
    nombre_pag: '',
    apellido_p_pag: '',
    apellido_m_pag: '',
    concepto: '',
    cantidad_pagar: 0,
    tipo_pago: '',
    habilitado: true,
    folio: 0,
    id_res: 0
  };

  ngOnInit(): void {
    this.bdSvc.obtenerResidentes().subscribe()
  }
  


  agregarpago(ruta: string){
    console.log(this.datos.hora_pago)
    let subs = this.bdSvc.agregarPago(this.datos)
    this.router.navigate([ruta]);
    }



}


