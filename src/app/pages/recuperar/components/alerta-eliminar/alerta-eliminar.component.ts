import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alerta-eliminar',
  templateUrl: './alerta-eliminar.component.html',
  styleUrls: ['./alerta-eliminar.component.scss']
})
export class AlertaEliminarComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AlertaEliminarComponent>,
    @Inject(MAT_DIALOG_DATA) public datos: DialogData) { }

  ngOnInit(): void {
    this.datos.borrar = true;
  }

  no(): void {
    this.datos.borrar = false;
    this.dialogRef.close();
  }

}

interface DialogData {
  nombre: string,
  borrar: boolean
}