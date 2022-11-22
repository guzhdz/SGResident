import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../interfaces/login.interface';
import { Residente } from '../interfaces/residente.interface';
import { Casa } from '../interfaces/casa.interface';
import { Pago } from '../interfaces/pago.interface';

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

  agregarResidente(residente: Residente) {
    return this.http.post(`${this.apiUrl}/residentes`, residente);
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

  obtenerPagosH(habilitado: boolean): Observable<Pago[]> {
    return this.http.get<Pago[]>(`${this.apiUrl}/pagosH/${habilitado}`);
  }

  obtenerPago(id: number): Observable<Pago[]> {
    return this.http.get<Pago[]>(`${this.apiUrl}/pagos/${id}`);
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