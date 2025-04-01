import { IListDetalleTransferencia } from "../../interfaces/IListDetalleTransferencia";
import { BodyAprobacion } from "../organismo/BodyAprobacion";
import { HeaderAprobacion } from "../organismo/HeaderAprobacion";
interface modalAprobacionHeader {
  onReturn?: () => void;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  detalle: IListDetalleTransferencia[];
}

export const ModalAprobacion = ({
  setState,
  onReturn,
  detalle,
}: modalAprobacionHeader) => {
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
