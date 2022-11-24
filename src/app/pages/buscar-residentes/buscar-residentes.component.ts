import { Component, OnInit } from '@angular/core';
import { Residente } from 'src/app/shared/interfaces/residente.interface';
import { BdService } from 'src/app/shared/services/bd.service';

@Component({
  selector: 'app-buscar-residentes',
  templateUrl: './buscar-residentes.component.html',
  styleUrls: ['./buscar-residentes.component.scss']
})
export class BuscarResidentesComponent implements OnInit {

  residentes: Residente[] = [ ]
  buscar: string = "";

  constructor(private bdSvc: BdService) { }

  ngOnInit(): void {
    this.obtenerResidentes()
  }

  obtenerResidentes() {
    let subs = this.bdSvc.obtenerResidentesH(true).subscribe((value: Residente[]) => {
      this.residentes = value;
    });

    setTimeout(() => {subs.unsubscribe()}, 1000);
  }

  buscarResidente() {
    this.bdSvc.obtenerResidenteNom(this.buscar).subscribe((value) => {
      console.log(value)
    });
  }

}
