import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../interfaces/login.interface';
import { Residente } from '../interfaces/residente.interface';
import { Casa } from '../interfaces/casa.interface';
import { Pago } from '../interfaces/pago.interface';
import { PagoDom } from '../interfaces/pagoDom.interface';

@Injectable({
  providedIn: 'root'
})
export class BdService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) { }

  //Login
  obtenerLogins(): Observable<Login[]> {
    return this.http.get<Login[]>(`${this.apiUrl}/login`);
  }

  modificarLogin(login: Login, id: number) {
    return this.http.put(`${this.apiUrl}/login/${id}`, login);
  }

  //Residentes
  obtenerResidentes(): Observable<Residente[]> {
    return this.http.get<Residente[]>(`${this.apiUrl}/residentes`);
  }

  obtenerResidentesH(habilitado: boolean): Observable<Residente[]> {
    return this.http.get<Residente[]>(`${this.apiUrl}/residentesH/${habilitado}`);
  }

  obtenerResidente(id: number): Observable<Residente[]> {
    return this.http.get<Residente[]>(`${this.apiUrl}/residentes/${id}`);
  }

  obtenerResidenteNom(nombre: string): Observable<Residente[]> {
    return this.http.get<Residente[]>(`${this.apiUrl}/residenteNom/${nombre}`);
  }

  contarResidentes(habilitado: boolean): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/residentesC/${habilitado}`);
  }

  agregarResidente(residente: Residente) {
    return this.http.post(`${this.apiUrl}/residentes`, residente);
  }

  agregarResidenteActualizado(residente: Residente, casa: Casa) {
    let subs = this.http.post(`${this.apiUrl}/casasE`, casa).subscribe((value: any) => {
      residente.id_casa = value[0].id_casa;
      let subs2 = this.http.post(`${this.apiUrl}/residentes`, residente).subscribe();
      setTimeout(() => {subs2.unsubscribe()}, 1000);
    });

    setTimeout(() => {subs.unsubscribe()}, 1000);
  }

  eliminarResidente(id: number) {
    return this.http.delete(`${this.apiUrl}/residentes/${id}`);
  }

  modificarResidente(residente: Residente, id: number) {
    return this.http.put(`${this.apiUrl}/residentes/${id}`, residente);
  }

  deshabilitarResidente(habilitado: boolean, id: number) {
    return this.http.put(`${this.apiUrl}/residentesH/${id}`, {habilitado: habilitado});
  }

  //Casas
  obtenerCasas(): Observable<Casa[]> {
    return this.http.get<Casa[]>(`${this.apiUrl}/casas`);
  }

  obtenerCasa(id: number): Observable<Casa[]> {
    return this.http.get<Casa[]>(`${this.apiUrl}/casas/${id}`);
  }

  agregarCasa(casa: Casa) {
    return this.http.post(`${this.apiUrl}/casas`, casa);
  }

  eliminarCasa(id: number) {
    return this.http.delete(`${this.apiUrl}/casas/${id}`);
  }

  modificarCasa(casa: Casa, id: number) {
    return this.http.put(`${this.apiUrl}/casas/${id}`, casa);
  }

  //Pagos
  obtenerPagos(): Observable<Pago[]> {
    return this.http.get<Pago[]>(`${this.apiUrl}/pagos`);
  }

  obtenerPagosResidente(id_res: number): Observable<Pago[]> {
    return this.http.get<Pago[]>(`${this.apiUrl}/pagosR/${id_res}`);
  }

  obtenerPagosH(habilitado: boolean): Observable<Pago[]> {
    return this.http.get<Pago[]>(`${this.apiUrl}/pagosH/${habilitado}`);
  }

  obtenerPagosDomE(domicilio: string): Observable<PagoDom[]> {
    return this.http.get<PagoDom[]>(`${this.apiUrl}/pagosDomE/${domicilio}`);
  }

  obtenerPagosDomG(habilitado: boolean): Observable<PagoDom[]> {
    return this.http.get<PagoDom[]>(`${this.apiUrl}/pagosDom/${habilitado}`);
  }

  obtenerMeses(id_res: number, ano: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/mesesR/${id_res}/${ano}`);
  }

  obtenerPago(id: number): Observable<Pago[]> {
    return this.http.get<Pago[]>(`${this.apiUrl}/pagos/${id}`);
  }

  contarPagos(habilitado: boolean): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/pagosC/${habilitado}`);
  }

  agregarPago(pago: Pago) {
    return this.http.post(`${this.apiUrl}/pagos`, pago);
  }

  eliminarPago(id: number) {
    return this.http.delete(`${this.apiUrl}/pagos/${id}`);
  }

  modificarPago(pago: Pago, id: number) {
    return this.http.put(`${this.apiUrl}/pagos/${id}`, pago);
  }

  deshabilitarPago(habilitado: boolean, id: number) {
    return this.http.put(`${this.apiUrl}/pagosH/${id}`, {habilitado: habilitado});
  }
}