import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() opcion: number = 0;

  barra: string[] = [
    "",
    "",
    "",
    "",
    ""
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.seleccionarOpcion()
  }

  seleccionarOpcion() {
    if(this.opcion != -1) 
    this.barra[this.opcion] = "op-selected";
  }

  barraOpcion(indice: number, ruta: string) {
    this.barra[this.opcion] = "";
    this.barra[indice] = "op-selected";
    this.opcion = indice;

    this.irA(ruta);
  }

  irA(ruta: string) {
    this.router.navigate([ruta]);
  }

}
