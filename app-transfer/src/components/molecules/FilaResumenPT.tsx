import { ITransferResumen } from "../../interfaces/ITransferResumen";
type PropsFilaResumen = {
  transferencia: ITransferResumen;
};
const FilaResumenPT = ({ transferencia }: PropsFilaResumen) => {
  return (
    <>
      <div className="px-5 flex justify-between py-2 bg-gray-50">
        <span className="w-1/4 text-sm">{transferencia.codigo}</span>
        <span className="w-1/4 text-sm">{transferencia.fecha}</span>
        <span className="w-1/4 text-sm">S/.{transferencia.monto}</span>
        <span className="w-1/4 text-sm">{transferencia.centro_costo}</span>
      </div>
    </>
  );
};

export default FilaResumenPT;
