import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { BdService } from './shared/services/bd.service';
import { Residente } from './shared/interfaces/residente.interface';
import { Casa } from './shared/interfaces/casa.interface';
import { Pago } from './shared/interfaces/pago.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SGResident';

  constructor(private bdSVC: BdService) {}

  accion () {
    let residente: Residente = {
      nombre: "Luisa",
      apellidoP: "Hernandez",
      apellidoM: "Cano",
      sexo: "f",
      fechaNacimiento: "1999/03/31",
      edad: 22,
      telefono: "3331165087",
      habilitado: false,
      id_casa: 1
    }

    let casa: Casa = {
      num_dom: "Av. Periferico #1654-Num 3",
      vialidad_1: "La paz",
      vialidad_2: "Av. Vallarta",
      referencias: "Facahada color azul"
    }

    let pago: Pago = {
	    fecha_pago: "2022/11/21",
      hora_pago: "22:30:00",
      nombre_pag: "Maria",
      apellido_p_pag: "Campos",
      apellido_m_pag: "Flores",
      concepto: "Pago de Noviembre",
      cantidad_pagar: 500,
      tipo_pago: "Cheque",
      habilitado: false,
      id_res: 3
    }

    this.bdSVC.eliminarPago(2).pipe(
      tap((res) => console.log(res))
    ).subscribe();
  }
}
