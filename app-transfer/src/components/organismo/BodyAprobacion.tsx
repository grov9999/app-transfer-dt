import { Button } from "../atom/Button";
import { Loading } from "../atom/Loading";
import { IListDetalleTransferencia } from "../../interfaces/IListDetalleTransferencia";

interface boydAprobacionProps {
  onRetun?: () => void;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  detalle: IListDetalleTransferencia[];
}

export const BodyAprobacion = ({
  onRetun,
  setState,
  detalle,
}: boydAprobacionProps) => {
  const total = detalle
    .reduce((acc, item) => acc + parseFloat(item.monto_total), 0)
    .toFixed(2);

  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0"); // Asegura que el día tenga dos dígitos
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Los meses son 0-indexados
    const year = date.getFullYear(); // Obtiene el año completo
    return `${day}/${month}/${year}`; // Formato DD/MM/YYYY
  };

  return (
    <div className="p-2">
      <h1 className="mb-2 px-1.5">
        Está a punto de Aprobar los siguientes partes de transferencia:{" "}
      </h1>
      {/* Contenedor de los detalles */}
      <div className="bg-gray-100 px-2 rounded-t-xl border-gray-400">
        {detalle && detalle.map((index) => (
          <div className="flex justify-between py-2" key={index.resultado_pt_id}>
            <span className="w-1/4">{index.codigo}</span>
            <span className="w-1/4">
              {formatDate(new Date(index.fecha_generacion))}
            </span>
            <span className="w-1/4">S/. {index.monto_total}</span>
            <span className="w-1/4">{index.centro_costo}</span>
          </div>
        ))}
      </div>
      {/* Total */}
      <div className="flex justify-between font-semibold bg-gray-200 p-2 border-t-1">
        <span className="w-1/2">Total:</span>
        <span className="w-1/2">S/ {total}</span>
      </div>

      {/* Mensaje de advertencia */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-2 my-2 rounded-md">
        <p>
          Esta acción enviará los datos a <b>SAP</b> y cambiará el estado de los
          partes seleccionados a <b>"Aprobado"</b>.
        </p>
      </div>
      <div className="flex justify-center space-x-4 pt-3">
        <Button name="Confirmar y Enviar" color="blue" onRetun={onRetun} />
        <Button
          name="Cancelar"
          color="gray"
          onRetun={() => {
            setState(false);
          }}
        />
      </div>
      <Loading />
    </div>
  );
};
