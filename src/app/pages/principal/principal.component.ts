import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BdService } from 'src/app/shared/services/bd.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  residentes = 0;
  pagos = 0;
  archivados = 0;
  constructor(private router: Router, private bdSvc: BdService) { }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  irA(ruta: string) {
    this.router.navigate([ruta]);
  }

  async obtenerDatos() {
    this.residentes = 0;
    this.pagos = 0;
    this.archivados = 0;
    let subs1 = await this.bdSvc.contarResidentes(true).subscribe((value) => {
      this.residentes = parseInt(value[0].count);
    });

    let subs2 = await this.bdSvc.contarPagos(true).subscribe((value) => {
      this.pagos = parseInt(value[0].count);
    });

    let subs3 = await this.bdSvc.contarPagos(false).subscribe((value) => {
      this.archivados += parseInt(value[0].count)
    });

    let subs4 = await this.bdSvc.contarResidentes(false).subscribe((value) => {
      this.archivados += parseInt(value[0].count);
    });

    setTimeout(() => {
      subs1.unsubscribe();
      subs2.unsubscribe();
      subs3.unsubscribe();
      subs4.unsubscribe();
    }, 1000);
  }

}
