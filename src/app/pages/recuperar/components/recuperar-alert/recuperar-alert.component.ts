import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-recuperar-alert',
  templateUrl: './recuperar-alert.component.html',
  styleUrls: ['./recuperar-alert.component.scss']
})
export class RecuperarAlertComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RecuperarAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public datos: DialogData) { }

  ngOnInit(): void {
  }

  no(): void {
    this.datos.borrar = false;
    this.dialogRef.close();
  }

}

interface DialogData {
  nombre: string,
  borrar: boolean,
  tipo: string
}
