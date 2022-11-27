import { Component, OnInit } from '@angular/core';
import { Residente } from 'src/app/shared/interfaces/residente.interface';
import { BdService } from 'src/app/shared/services/bd.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AlertaEliminarComponent } from './components/alerta-eliminar/alerta-eliminar.component';

@Component({
  selector: 'app-buscar-residentes',
  templateUrl: './buscar-residentes.component.html',
  styleUrls: ['./buscar-residentes.component.scss']
})
export class BuscarResidentesComponent implements OnInit {

  residentes: Residente[] = [ ]
  buscar: string = "";

  aparece = "show";

  constructor(private bdSvc: BdService, private router: Router, public alerta: MatDialog) { }

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

  irADetalles(id_res: number) {
    this.router.navigate(['/detalles-residente'], {queryParams: {id_res: id_res}});
  }

  async eliminarAlerta(id: number | undefined, nombre: string) {
    const dialogRef = this.alerta.open(AlertaEliminarComponent, {
      width: '400px',
      height: '200px',
      data: {nombre: nombre, borrar: true},
    });

    await dialogRef.afterClosed().subscribe(result => {
      if(result.borrar)
      this.eliminarResidente(id);
    });

    
  }

  async eliminarResidente(id: number | undefined) {
    console.log(id)
    if(id != undefined) {
      let subs = await this.bdSvc.deshabilitarResidente(false, id).subscribe((value) => {});

      setTimeout(() => {this.buscarResidente()}, 300);
      
      setTimeout(() => {subs.unsubscribe()}, 1000); 
    }
  }
}
