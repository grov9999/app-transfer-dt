import { X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../store/TransferenciaRedux";
import { IListDetalleTransferencia } from "../../interfaces/IListDetalleTransferencia";
import { onDeleteDeArregloTranfer } from "../../store/transferencia/transferenciaSlice";
interface headerAprobacionProps {
  onReturn?: () => void;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeaderAprobacion = ({ setState }: headerAprobacionProps) => {
  const dispatch = useAppDispatch();
  const { selectedTransfers } = useAppSelector((state) => state.transferencias);

  return (
    <div className="relative bg-blue-600 rounded px-4 py-1">
      <button
        className="absolute top-2 right-2 text-6xl text-white hover:text-black"
        onClick={() => {
          {
            selectedTransfers &&
              dispatch(
                onDeleteDeArregloTranfer(
                  selectedTransfers as IListDetalleTransferencia[]
                )
              );
          }
          setState(false);
        }}
      >
        <X size={20} strokeWidth={4} />
      </button>
      <h2 className="text-xl font-semibold text-white">
        Aprobar y Enviar Partes a SAP
      </h2>
    </div>
  );
};
