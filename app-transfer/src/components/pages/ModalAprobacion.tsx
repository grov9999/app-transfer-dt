import { IListDetalleTransferencia } from "../../interfaces/IListDetalleTransferencia";
import { sendDetalleTransferencia } from "../../lib/fetchTransferencia";
import { onUpdateTransfer } from "../../store/transferencia/transferenciaSlice";
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
        motivo_rechazo: "",
        referencia_sap: "SAP-458",
      };
    });
    console.log(actiones);
    sendDetalleTransferencia(actiones).then((response) => {
      if (!response.ok) {
        dispatch(onUpdateTransfer(actiones));
        setState(false)
        //console.log(response.message);
      } else {
        //console.log(response.data);
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
