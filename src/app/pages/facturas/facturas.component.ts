import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BdService } from 'src/app/shared/services/bd.service';
import { FacturasModule } from './facturas.module';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.scss']
})
export class FacturasComponent implements OnInit {


  buscar: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
