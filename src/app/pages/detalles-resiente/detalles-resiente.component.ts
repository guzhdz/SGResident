import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Casa } from 'src/app/shared/interfaces/casa.interface';
import { Pago } from 'src/app/shared/interfaces/pago.interface';
import { Residente } from 'src/app/shared/interfaces/residente.interface';
import { BdService } from 'src/app/shared/services/bd.service';

@Component({
  selector: 'app-detalles-resiente',
  templateUrl: './detalles-resiente.component.html',
  styleUrls: ['./detalles-resiente.component.scss']
})
export class DetallesResienteComponent implements OnInit {

  residente: Residente = {
    nombre: "",
    apellido_p: "",
    apellido_m: "",
    sexo: "",
    fecha_nacimiento: "",
    edad: 0,
    telefono: "",
    habilitado: true,
    id_casa: 0
  }

  casa: Casa = {
    num_dom: "",
	  vialidad_1: "",
	  vialidad_2: "",
	  referencias: ""
  }

  pagos: Pago[] = [];

  ano = new Date().getFullYear();
  indiceResidente: number = 0;

  mesesF = [
    {
      mes: 1,
      nombre: "Enero"
    },
    {
      mes: 2,
      nombre: "Febrero"
    },
    {
      mes: 3,
      nombre: "Marzo"
    },
    {
      mes: 4,
      nombre: "Abril"
    },
    {
      mes: 5,
      nombre: "Mayo"
    },
    {
      mes: 6,
      nombre: "Junio"
    },
    {
      mes: 7,
      nombre: "Julio"
    },
    {
      mes: 8,
      nombre: "Agosto"
    },
    {
      mes: 9,
      nombre: "Septiembre"
    },
    {
      mes: 10,
      nombre: "Octubre"
    },
    {
      mes: 11,
      nombre: "Noviembre"
    },
    {
      mes: 12,
      nombre: "Diciembre"
    },
  ];

  constructor(private bdSvc: BdService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos() {
    let subs = this.route.queryParams.subscribe((value) => {
      this.indiceResidente = parseInt(value['id_res']);
      let subs2 = this.bdSvc.obtenerResidente(this.indiceResidente).subscribe((value: Residente[]) => {
        this.residente = value[0];
        let subs3 = this.bdSvc.obtenerCasa(this.residente.id_casa).subscribe((value: Casa[]) => {
          this.casa = value[0];
          let subs4 = this.bdSvc.obtenerPagosResidente(this.residente.id_res || 0).subscribe((value: Pago[]) => {
            this.pagos = value;
            let subs5 = this.bdSvc.obtenerMeses(this.indiceResidente, this.ano).subscribe((value: any[]) => {
              this.mesesFaltantes(value);
            })        
            setTimeout(() => {
              subs5.unsubscribe();
              subs4.unsubscribe();
              subs3.unsubscribe();
              subs2.unsubscribe();
              subs.unsubscribe();
            }, 1000);
          })
        })
      })
    });
  }

  mesesFaltantes(meses: any[]) {
    meses.forEach(mes => {
      this.mesesF = this.mesesF.filter((num) => num.mes != parseInt(mes.mes));
    });
  }
  
  irA(ruta: string) {
    this.router.navigate([ruta]);
  }

}
