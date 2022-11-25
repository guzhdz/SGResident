import { Component, OnInit } from '@angular/core';
import { Residente } from 'src/app/shared/interfaces/residente.interface';
import { Casa } from 'src/app/shared/interfaces/casa.interface';
import { BdService } from 'src/app/shared/services/bd.service';

@Component({
  selector: 'app-agregar-residente',
  templateUrl: './agregar-residente.component.html',
  styleUrls: ['./agregar-residente.component.scss']
})
export class AgregarResidenteComponent implements OnInit {
 
  datos: Residente={
    nombre: "",
    apellido_p: "",
    sexo: "",
    fecha_nacimiento: "",
    edad: null,
    telefono: "",
    habilitado: false,
    id_res: 0,
    apellido_m: '',
    id_casa: 0
  };

  direccion: Casa={
    num_dom: '',
    vialidad_1: '',
    vialidad_2: '',
    referencias: ''
  };

  constructor(private bdSvc: BdService) { }

  ngOnInit(): void {
    this.agregar()
  }

  agregar(){
    console.log(this.datos.nombre)
    console.log(this.datos.sexo)
    console.log(this.datos.edad)
    console.log(this.datos.telefono)
    console.log(this.direccion.num_dom)
    console.log(this.direccion.vialidad_1)
    console.log(this.direccion.vialidad_2)
    console.log(this.direccion.referencias)
    }

  
}
