import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Subscription, tap } from 'rxjs';
import { Login } from '../../../shared/interfaces/login.interface';
import { BdService } from '../../../shared/services/bd.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  loginIncorrecto = false;
  usuario = "";
  contrasena = "";

  logins: Subscription = new Subscription();

  constructor(private bdSvc: BdService, private router: Router) { }

  ngOnInit(): void {
  }

  async ingresar() {
    this.logins = this.bdSvc.obtenerLogins().subscribe(value => this.verificarDatos(value));
  }

  verificarDatos(logins: Login[]) {
    if(logins[0] != undefined) {
      if(logins[0].usuario == this.usuario &&
        logins[0].contrasena == this.contrasena) {
          this.loginIncorrecto = false;
          this.logins.unsubscribe();
          this.router.navigate(['/principal']);
        }
      else {
        this.loginIncorrecto = true;
        this.logins.unsubscribe();
      }
    }
  }

}
