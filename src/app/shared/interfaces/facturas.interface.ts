export interface Factura {
    folio?: number,
    rfc: string,
    fecha: string,
    hora: string,
    importe_total: number,
    concepto: string,
    metodo_pago: string,
    folio_p: number
}