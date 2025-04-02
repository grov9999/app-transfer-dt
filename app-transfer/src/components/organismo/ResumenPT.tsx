import { useAppDispatch, useAppSelector } from "../../store/TransferenciaRedux";
import FilaResumenPT from "../molecules/FilaResumenPT";
import FilaResumentTotal from "../molecules/FilaResumentTotal";
import { sendDetalleTransferencia } from "../../lib/fetchTransferencia";
import toast from "react-hot-toast";
import { useState } from "react";
import { IListDetalleTransferencia } from "../../interfaces/IListDetalleTransferencia";
import {
  onDeleteDeArregloTranfer,
  onDeleteDeTranfer,
  onUpdateTransfer,
} from "../../store/transferencia/transferenciaSlice";

type IPropsResumenPT = {
  texto: string;
  transferencias: IListDetalleTransferencia[];
  setState: React.Dispatch<React.SetStateAction<boolean>>;
};
const ResumenPT = ({ texto, transferencias, setState }: IPropsResumenPT) => {
  const [motivos, setmotivos] = useState("");
  const monto_total = transferencias.reduce(
    (acumulador, item) => acumulador + parseFloat(item.monto_total),
    0
  );
  const dispatch = useAppDispatch();
  const { detalleTransferencia } = useAppSelector(
    (state) => state.detalleTransferencia
  );

  const handleUpdate = async (
    e: React.FormEvent<HTMLFormElement>,
    transferencias: IListDetalleTransferencia[]
  ) => {
    e.preventDefault();
    const updateTransfer = transferencias.map((item) => ({
      ...item,
      pt_id: item.resultado_pt_id,
      motivo_rechazo: motivos,
      estado: "Rechazado",
      usuario_aprobador_id: 2,
      referencia_sap: "",
    }));
    const response = await sendDetalleTransferencia(updateTransfer);

    if (response.ok) {
      toast.success("Transferencia actualizada con éxito!");
      dispatch(
        onDeleteDeArregloTranfer(updateTransfer as IListDetalleTransferencia[])  
      ) 

      dispatch(onUpdateTransfer(updateTransfer));
      setState(false);
    } else {
      toast.error("Error al actualizar la transferencia!");
    }
  };
  return (
    <>
      <h1 className="mb-2 px-5 pt-3 TEXT-SM">{texto}</h1>
      <div className="mx-5 rounded-t-sm  border-2 border-gray-300">
        {transferencias.map((transferencia) => {
          return (
            <FilaResumenPT
              transferencia={transferencia}
              key={transferencia.codigo}
            />
          );
        })}
        <FilaResumentTotal total={monto_total} />
      </div>
      <form
        className=" px-5 p-3"
        onSubmit={(e) => handleUpdate(e, transferencias)}
      >
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
            className="bg-red-500 text-white p-3 rounded-sm  cursor-pointer"
            type="submit"
          >
            Confirmar Rechazo
          </button>
          <button
            id="cancelar"
            type="button"
            onClick={() => {
              dispatch(
                onDeleteDeTranfer(
                  detalleTransferencia as IListDetalleTransferencia
                )
              );
              setState(false);
            }}
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
