import toast from "react-hot-toast";
import { IListDetalleTransferencia } from "../../interfaces/IListDetalleTransferencia";
import { sendDetalleTransferencia } from "../../lib/fetchTransferencia";
("../../store/detalleTransferencia/detalleTransferenciaSlice");
import {
  onDeleteDeArregloTranfer,
  onUpdateTransfer,
} from "../../store/transferencia/transferenciaSlice";
import { useAppDispatch, useAppSelector } from "../../store/TransferenciaRedux";
import { BodyAprobacion } from "../organismo/BodyAprobacion";
import { HeaderAprobacion } from "../organismo/HeaderAprobacion";
import { onUpdateTransferTem } from "../../store/tablaTransferenciaSlice";
interface modalAprobacionHeader {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalAprobacion = ({ setState }: modalAprobacionHeader) => {
  const { selectedTransfers } = useAppSelector((state) => state.transferencias);

  const dispatch = useAppDispatch();
  const onReturn = () => {
    const actiones: IListDetalleTransferencia[] = selectedTransfers?.map(
      (detalle) => {
        return {
          ...detalle,
          pt_id: detalle.resultado_pt_id,
          estado: "Aprobado",
          usuario_aprobador_id: 2,
          motivo_rechazo: "",
          referencia_sap: "",
        };
      }
    );
    sendDetalleTransferencia(actiones).then((response) => {
      if (!response.ok) {
      } else {
        toast.success("Transferencia Aprobada con éxito!");
        dispatch(
          onDeleteDeArregloTranfer(response.data as IListDetalleTransferencia[])
        );
        dispatch(
          onUpdateTransfer(response.data as IListDetalleTransferencia[])
        );
        dispatch(
          onUpdateTransferTem(response.data as IListDetalleTransferencia[])
        );

        setState(false);
      }
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-[13px]">
      <div className="w-full max-w-lg max-h-screen overflow-auto border border-gray-300 rounded-xl shadow-lg pb-5">
        <HeaderAprobacion setState={setState} />
        <BodyAprobacion
          setState={setState}
          onRetun={onReturn}
          detalle={selectedTransfers}
        />
      </div>
    </div>
  );
};
