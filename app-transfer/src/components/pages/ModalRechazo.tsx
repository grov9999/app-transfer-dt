import { useAppSelector } from "../../store/TransferenciaRedux";
import { HeaderModal } from "../organismo/HeaderModal";
import ResumenPT from "../organismo/ResumenPT";

const ModalRechazo = () => {
  const { transferencias } = useAppSelector((state) => state.transferencias);

  // const transferencias = [
  //   {
  //     codigo: "A001",
  //     fecha: "2025-03-31",
  //     monto: 1500,
  //     centro_costo: "Marketing",
  //   },
  //   {
  //     codigo: "A002",
  //     fecha: "2025-03-30",
  //     monto: 2000,
  //     centro_costo: "Ventas",
  //   },
  //   {
  //     codigo: "A003",
  //     fecha: "2025-03-29",
  //     monto: 2500,
  //     centro_costo: "Logística",
  //   },
  // ];
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-[0.7px]">
      <div className="w-full max-w-lg border-1 border-gray-300 rounded-xl shadow-lg pb-3">
        <HeaderModal
          aprovado={false}
          texto="Rechazar Partes de Transferencia"
        />
        <ResumenPT
          texto="Esta a punto de rechazar las siguientes partes de tranferencia"
          transferencias={transferencias}
        />
      </div>
    </div>
  );
};

export default ModalRechazo;
