export interface Pago {
    folio?: number,
	fecha_pago: string,
	hora_pago: string,
	nombre_pag: string,
	apellido_p_pag: string,
	apellido_m_pag: string,
	concepto: string,
	cantidad_pagar: number,
	tipo_pago: string,
	habilitado: boolean,
	id_res: number
}