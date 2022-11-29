import { Component, OnInit } from '@angular/core';
import { Residente } from 'src/app/shared/interfaces/residente.interface';
import { Casa } from 'src/app/shared/interfaces/casa.interface';
import { BdService } from 'src/app/shared/services/bd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-residente',
  templateUrl: './agregar-residente.component.html',
  styleUrls: ['./agregar-residente.component.scss']
})



export class AgregarResidenteComponent implements OnInit {

  constructor(private bdSvc: BdService, private router: Router) { }

  datos: Residente={
    nombre: "",
    apellido_p: "",
    sexo: "",
    fecha_nacimiento: "",
    edad: 0,
    telefono: "",
    habilitado: false,
    id_res: 0,
    apellido_m: '',
    id_casa: 0
  };

  edad = null;

  direccion: Casa={
    num_dom: '',
    vialidad_1: '',
    vialidad_2: '',
    referencias: ''
  };

  ngOnInit(): void {
  }

  irA(ruta: string) {
    this.router.navigate([ruta]);
  }

     agregarres(){ let subs = this.bdSvc.agregarResidenteActualizado(this.datos, this.direccion)
    }


}

