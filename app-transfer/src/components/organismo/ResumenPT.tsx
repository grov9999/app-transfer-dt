import { ITransferResumen } from "../../interfaces/ITransferResumen";
import FilaResumenPT from "../molecules/FilaResumenPT";
import FilaResumentTotal from "../molecules/FilaResumentTotal";

type IPropsResumenPT = {
  texto: string;
  transferencias: ITransferResumen[];
};
const ResumenPT = ({ texto, transferencias }: IPropsResumenPT) => {
  return (
    <>
      <h1 className="mb-2 px-5 pt-3">{texto}</h1>
      <div className="mx-5 rounded-t-sm  border-2 border-gray-300">
        {transferencias.map((transferencia) => {
          return (
            <FilaResumenPT transferencia={transferencia} key={Math.random()} />
          );
        })}
        <FilaResumentTotal total={122} />
      </div>
      <form action="" className=" px-5 p-3">
        <label>Motivacion de rechazo(opcional)</label>
        <textarea
          id="motivo"
          rows={4}
          className="block mt-2 p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Ingrese motivo de rechazo..."
        ></textarea>
        <div className="flex justify-center gap-x-3 mt-5">
          <input
            type="submit"
            className="bg-red-500 text-white p-3 rounded-sm"
            value={"Confirmar Rechazo"}
          />
          <button
            id="cancelar"
            className="bg-gray-100 text-black p-3 rounded-sm border border-gray-400"
          >
            Cancelar
          </button>
        </div>
      </form>
    </>
  );
};

export default ResumenPT;
