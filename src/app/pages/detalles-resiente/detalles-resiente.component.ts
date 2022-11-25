import { Component, OnInit } from '@angular/core';
import { Casa } from 'src/app/shared/interfaces/casa.interface';
import { Residente } from 'src/app/shared/interfaces/residente.interface';
import { BdService } from 'src/app/shared/services/bd.service';

@Component({
  selector: 'app-detalles-resiente',
  templateUrl: './detalles-resiente.component.html',
  styleUrls: ['./detalles-resiente.component.scss']
})
export class DetallesResienteComponent implements OnInit {

  constructor(private bdSvc: BdService ) { }

  ngOnInit(): void {
    let residente: Residente = {
      nombre: "prueba",
      apellido_p: "prueba",
      apellido_m: "prueba",
      sexo: "p",
      fecha_nacimiento: "2011/02/22",
      edad: 10,
      telefono: "prueba",
      habilitado: true,
      id_casa: 0
    }

    let casa: Casa = {
      num_dom: "prueba",
      vialidad_1: "prueba",
      vialidad_2: "prueba",
      referencias: "prueba"
    }

    this.bdSvc.agregarResidenteActualizado(residente, casa);
  }

}
