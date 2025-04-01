import { IListDetalleTransferencia } from "../../interfaces/IListDetalleTransferencia";
import { formatDate } from "../../utils/formatDate";
type PropsFilaResumen = {
  transferencia: IListDetalleTransferencia;
};
const FilaResumenPT = ({ transferencia }: PropsFilaResumen) => {
  return (
    <>
      <div className="px-5 flex justify-between py-2 bg-gray-50">
        <span className="w-1/4 text-sm">{transferencia.codigo}</span>
        <span className="w-1/4 text-sm">
          {formatDate(new Date(transferencia.fecha_generacion))}
        </span>
        <span className="w-1/4 text-sm">S/.{transferencia.monto_total}</span>
        <span className="w-1/4 text-sm">{transferencia.centro_costo}</span>
      </div>
    </>
  );
};

export default FilaResumenPT;
