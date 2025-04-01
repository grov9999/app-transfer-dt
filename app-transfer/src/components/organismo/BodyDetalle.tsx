import { IListDetalleTransferencia } from "../../interfaces/IListDetalleTransferencia";
import { CardTexArea } from "../molecules/CardTexArea"

interface bodyDetalleProps {
  detalleTransfer: IListDetalleTransferencia | null,
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void

}

export const BodyDetalle = ({ detalleTransfer, onChange }: bodyDetalleProps) => {

  const dateCreate = detalleTransfer?.fecha_generacion && new Date(detalleTransfer?.fecha_generacion).toISOString().split('T')[0].split('-').reverse().join('/');
  const dateAproba = detalleTransfer?.fecha_aprobacion && new Date(detalleTransfer?.fecha_aprobacion).toISOString().split('T')[0].split('-').reverse().join('/');
  const colors = {
    Pendiente: "bg-yellow-100 text-yellow-600",
    Aprobado: "bg-green-100 text-green-600",
    Rechazado: "bg-red-100 text-red-600",
  };

  return (
    <>
      <div className="p-4 grid grid-cols-2 gap-4 text-sm text-gray-700">
        <div>
          <h2 className="font-semibold text-gray-900 mb-2 ">Información General</h2>
          <div className="grid grid-cols-2 font-light">
            <div>
              <p className="p-[0.2px]">ID:</p>
              <p className="p-[1px]">Fecha de generación:</p>
              <p className="p-[1px]">
                Estado actual:
              </p>
              <p className="p-[1px]">Usuario creador: </p>
              <p className="p-[1px]">Monto total:</p>
              <p className="p-[1px]">Moneda: </p>
              <p className="p-[1px]">Referencia SAP: </p>

            </div>
            <div className="font-medium font-sans">
              <p className="p-[0.9px] "> {detalleTransfer?.codigo}</p>
              <p className="p-[1px]">{dateCreate}</p>
              <p className="p-[1px]">
                <span className={` text-xs font-semibold px-3 py-1 rounded-3xl border-1 " ${detalleTransfer?.estado && colors[detalleTransfer.estado]} `} >
                  {detalleTransfer?.estado}
                </span>
              </p>
              <p className="p-[1px]">{detalleTransfer?.usuario_creador}</p>
              <p className="p-[1px]">S/ {detalleTransfer?.monto_total}</p>
              <p className="p-[1px]">{detalleTransfer?.moneda}</p>
              <p className="p-[1px]">{detalleTransfer?.referencia_sap ? detalleTransfer?.referencia_sap : '-'}</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-gray-900 mb-2">Información de Transferencia</h2>
          <div className="grid grid-cols-2 font-light">
            <div>

              <p className="p-[1px]">Almacén origen: </p>
              <p className="p-[1px]">Almacén destino: </p>
              <p className="p-[1px]">Centro de costo: </p>
              <p className="p-[1px]">Usuario aprobador: </p>
              <p className="p-[1px]">Fecha de aprobación: </p>
              <p className="p-[1px]">Motivo de rechazo: </p>
            </div>
            <div className="font-medium font-sans">

              <p className="p-[1px]">{detalleTransfer?.almacen_origen}</p>
              <p className="p-[1px]">{detalleTransfer?.almacen_destino}</p>
              <p className="p-[1px]">{detalleTransfer?.centro_costo ? detalleTransfer.centro_costo : '-'}</p>
              <p className="p-[1px]">{detalleTransfer?.usuario_aprobador ? detalleTransfer?.usuario_aprobador : '-'}</p>
              <p className="p-[1px]">{detalleTransfer?.fecha_aprobacion ? dateAproba : '-'}</p>
              <p className="p-[1px]">{detalleTransfer?.motivo_rechazo ? detalleTransfer.motivo_rechazo : '-'}</p>
            </div>
          </div>
        </div>
      </div>

      <CardTexArea label="Observaciones" isDisable={true} tipo="obs" onChange={onChange} detalleTransfer={detalleTransfer?.observaciones ? detalleTransfer?.observaciones : ''} />
      <CardTexArea label="Log de Integración:" isDisable={true} tipo="logs" detalleTransfer={detalleTransfer?.log_detalle} />

    </>
  )
}

