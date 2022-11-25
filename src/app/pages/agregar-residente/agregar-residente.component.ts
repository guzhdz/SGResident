import { Component, OnInit } from '@angular/core';
import { Residente } from 'src/app/shared/interfaces/residente.interface';
import { BdService } from 'src/app/shared/services/bd.service';

@Component({
  selector: 'app-agregar-residente',
  templateUrl: './agregar-residente.component.html',
  styleUrls: ['./agregar-residente.component.scss']
})
export class AgregarResidenteComponent implements OnInit {
  nombre = ""


  constructor(private bdSvc: BdService) { }

  ngOnInit(): void {
    this.Nombre()
  }
  Nombre(){
    console.log(this)
    }

  
}
