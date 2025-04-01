export interface DetalleTransferencia {
    pt_id:             number;
    codigo:            string;
    fecha_generacion:  Date;
    almacen_origen:    string;
    almacen_destino:   string;
    monto_total:       string;
    moneda:            string;
    estado:            string;
    usuario_creador:   string;
    usuario_aprobador: number|null;
    fecha_aprobacion:  Date |null;
    motivo_rechazo:    string|null;
    referencia_sap:    string|null;
    observaciones:     string|null;
    log_accion:        string;
    log_usuario:       string;
    log_fecha:         Date;
    log_detalle:       string;
    centro_costo:      string;
}
