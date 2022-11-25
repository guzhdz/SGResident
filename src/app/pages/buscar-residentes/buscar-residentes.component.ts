import { Component, OnInit } from '@angular/core';
import { Residente } from 'src/app/shared/interfaces/residente.interface';
import { BdService } from 'src/app/shared/services/bd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar-residentes',
  templateUrl: './buscar-residentes.component.html',
  styleUrls: ['./buscar-residentes.component.scss']
})
export class BuscarResidentesComponent implements OnInit {

  residentes: Residente[] = [ ]
  buscar: string = "";

  aparece = "show";

  constructor(private bdSvc: BdService, private router: Router) { }

  ngOnInit(): void {
    this.buscarResidente()
  }

  obtenerResidentes() {
    let subs = this.bdSvc.obtenerResidentesH(true).subscribe((value: Residente[]) => {
      this.residentes = value;
    });

    setTimeout(() => {subs.unsubscribe()}, 1000);
  }

  buscarResidente() {
    if(this.buscar == "") 
      this.obtenerResidentes()
    else {
      let subs = this.bdSvc.obtenerResidenteNom(this.buscar.toLocaleLowerCase()).subscribe((value) => {
        this.residentes = value;
      });

      setTimeout(() => {subs.unsubscribe()}, 1000);
    }
  }

  irA(ruta: string) {
    this.router.navigate([ruta]);
  }

  eliminarResidente(id: number | undefined) {
    if(id != undefined) {
      let subs = this.bdSvc.deshabilitarResidente(false, id).subscribe();

      setTimeout(() => {subs.unsubscribe();
        this.buscarResidente();}, 400);

      
    }
  }
}
