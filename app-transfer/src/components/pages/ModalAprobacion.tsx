import toast from "react-hot-toast";
import { IListDetalleTransferencia } from "../../interfaces/IListDetalleTransferencia";
import { sendDetalleTransferencia } from "../../lib/fetchTransferencia";
import {
  //onDeleteDeArregloTranfer,
} from "../../store/detalleTransferencia/detalleTransferenciaSlice";
import { onDeleteDeArregloTranfer, onUpdateTransfer } from "../../store/transferencia/transferenciaSlice";
import { useAppDispatch } from "../../store/TransferenciaRedux";
import { BodyAprobacion } from "../organismo/BodyAprobacion";
import { HeaderAprobacion } from "../organismo/HeaderAprobacion";
interface modalAprobacionHeader {
  // onReturn?: () => void;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  detalle: IListDetalleTransferencia[];
}
 
export const ModalAprobacion = ({
  setState,
  // onReturn,
  detalle,
}: modalAprobacionHeader) => { 
  const dispatch = useAppDispatch();
  const onReturn = () => {
    const actiones: IListDetalleTransferencia[] = detalle?.map((detalle) => {
      return {
        ...detalle,
        pt_id: detalle.resultado_pt_id,
        estado: "Aprobado",
        usuario_aprobador_id: 4,
       // usuario_aprobador:"David Torres",
        motivo_rechazo: "",
        referencia_sap: "SAP-458",
      };
    });
    console.log(actiones);
    sendDetalleTransferencia(actiones).then((response) => {
      if (!response.ok) {
      } else {
        toast.success("Transferencia Aprobada con éxito!");
        dispatch(
          onDeleteDeArregloTranfer(actiones as IListDetalleTransferencia[])
        );
        dispatch(onUpdateTransfer(actiones));

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
          detalle={detalle}
        />
      </div>
    </div>
  );
};
