export interface Transferencia {
    id:                   number;
    codigo:               string;
    fecha_generacion:     Date;
    almacen_origen_id:    number;
    almacen_destino_id:   number;
    monto_total:          string;
    moneda:               string;
    estado:               string;
    usuario_creador_id:   number;
    usuario_aprobador_id: null;
    fecha_aprobacion:     null;
    motivo_rechazo:       null;
    referencia_sap:       null;
    observaciones:        null;
}
