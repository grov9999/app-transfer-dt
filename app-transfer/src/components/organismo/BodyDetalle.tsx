import { CardTexArea } from "../molecules/CardTexArea"

export const BodyDetalle = () => {
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
              <p className="p-[0.9px] "> PT-003</p>
              <p className="p-[1px]">18/01/2025</p>
              <p className="p-[1px]">
                <span className="bg-yellow-100 text-yellow-600 text-xs font-semibold px-3 py-1 rounded-3xl border-1" >
                  Pendiente
                </span>
              </p>
              <p className="p-[1px]">JUAN PEREZ</p>
              <p className="p-[1px]">S/ 475.80</p>
              <p className="p-[1px]">PEN</p>
              <p className="p-[1px]">-</p>
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

              <p className="p-[1px]">ALM-CENTRAL</p>
              <p className="p-[1px]">ALM-SUR-02</p>
              <p className="p-[1px]">CC-TRANS-01</p>
              <p className="p-[1px]">-</p>
              <p className="p-[1px]">-</p>
              <p className="p-[1px]">-</p>
            </div>
          </div>
        </div>
      </div>

      <CardTexArea label="Observaciones" />
      <CardTexArea label="Observaciones" />
      <CardTexArea label="Log de Integración:" isDisable={true} /> 

    </>
  )
}

