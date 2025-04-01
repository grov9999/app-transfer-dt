import { useAppSelector } from "../../store/TransferenciaRedux";
import { HeaderModal } from "../organismo/HeaderModal";
import ResumenPT from "../organismo/ResumenPT";

const ModalRechazo = () => {
  const { selectedTransfers } = useAppSelector((state) => state.transferencias);

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-[0.7px]">
      <div className="w-full max-w-lg border-1 border-gray-300 rounded-xl shadow-lg pb-3">
        <HeaderModal
          aprovado={false}
          texto="Rechazar Partes de Transferencia"
        />
        <ResumenPT
          texto="Esta a punto de rechazar las siguientes partes de tranferencia"
          transferencias={selectedTransfers}
        />
      </div>
    </div>
  );
};

export default ModalRechazo;
