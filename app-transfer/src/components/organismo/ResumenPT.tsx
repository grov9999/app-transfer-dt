import { useNavigate } from "react-router-dom";
import { ITransfer } from "../../interfaces/ITransferCreate";
import { useAppDispatch } from "../../store/TransferenciaRedux";
import FilaResumenPT from "../molecules/FilaResumenPT";
import FilaResumentTotal from "../molecules/FilaResumentTotal";
import { sendDetalleTransferencia } from "../../lib/fetchTransferencia";
import toast from "react-hot-toast";
import { useState } from "react";
import { IListDetalleTransferencia } from "../../interfaces/IListDetalleTransferencia";

type IPropsResumenPT = {
  texto: string;
  transferencias: IListDetalleTransferencia[];
};
const ResumenPT = ({ texto, transferencias }: IPropsResumenPT) => {
  const [motivos, setmotivos] = useState("");
  const navigate = useNavigate();
  const monto_total = transferencias.reduce(
    (acumulador, item) => acumulador + parseFloat(item.monto_total),
    0
  );
  const dispatch = useAppDispatch();
  const handleUpdate = async (transferencias: any) => {
    console.log(transferencias);

    // const response = await sendDetalleTransferencia(data);
    // if (response.ok && response.data) {
    //   toast.success("Transferencia actualizada con éxito!");
    //   // dispatch(onAddTransfer(response.data));
    //   navigate("/");
    // } else {
    //   toast.error("Error al actualizar la transferencia!");
    // }
  };
  return (
    <>
      <h1 className="mb-2 px-5 pt-3 TEXT-SM">{texto}</h1>
      <div className="mx-5 rounded-t-sm  border-2 border-gray-300">
        {transferencias.map((transferencia) => {
          return (
            <FilaResumenPT transferencia={transferencia} key={Math.random()} />
          );
        })}
        <FilaResumentTotal total={monto_total} />
      </div>
      <form className=" px-5 p-3">
        <label htmlFor="motivo_rechazo">Motivacion de rechazo(opcional)</label>
        <textarea
          id="motivo_rechazo"
          rows={4}
          name="motivo_rechazo"
          value={motivos}
          onChange={(e) => setmotivos(e.target.value)}
          className="block mt-2 p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Ingrese motivo de rechazo..."
        ></textarea>
        <div className="flex justify-center gap-x-3 mt-5">
          <button
            type="submit"
            className="bg-red-500 text-white p-3 rounded-sm  cursor-pointer"
            onClick={() => handleUpdate(transferencias)}
          >
            Confirmar Rechazo
          </button>
          <button
            id="cancelar"
            onClick={() => navigate("/")}
            className="bg-gray-100 text-black p-3 rounded-sm border border-gray-400 cursor-pointer"
          >
            Cancelar
          </button>
        </div>
      </form>
    </>
  );
};

export default ResumenPT;
