import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  pagos: Pago[] = []

  idResidente = 0;
  indiceResidente: number = 0;

  constructor(private bdSvc: BdService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    let subs = this.route.queryParams.subscribe((value) => {
      this.indiceResidente = parseInt(value['id_res']);
      let subs2 = this.bdSvc.obtenerResidente(this.indiceResidente).subscribe((value: Residente[]) => {
        this.residente = value[0];
        let subs3 = this.bdSvc.obtenerCasa(this.residente.id_casa).subscribe((value: Casa[]) => {
          this.casa = value[0];
          let subs4 = this.bdSvc.obtenerPagosResidente(this.residente.id_res || 0).subscribe((value: Pago[]) => {
            this.pagos = value;
            setTimeout(() => {
              subs.unsubscribe();
              subs2.unsubscribe();
              subs3.unsubscribe();
              subs4.unsubscribe();
            }, 1000);
          })
        })
      })
    });
  }

}
