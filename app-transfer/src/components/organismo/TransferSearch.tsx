import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/TransferenciaRedux";
import { useState } from "react";
import {
  onStartTransfLoading,
} from "../../store/transferencia/transferenciaSlice";

export const TransferSearch = () => {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("/create");
  };

  const dispatch = useAppDispatch();
  const [ searchCod, setSearchCod] = useState("");

  
  const handleSeacrhClick = async () => {
    dispatch(onStartTransfLoading());
  }
  

  return (
    <form>
      <div className="flex justify-between mb-3">
        <h1 className="text-2xl text-gray-90 font-semibold">
          Gestor de Transferencia DT
        </h1>
        <button
          type="button"
          className="px-5 py-2.5 text-sm font-medium text-white bg-[#3666C2] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center"
          onClick={handleCreate}
        >
          + Nueva Parte
        </button>
      </div>

      <div className="mx-auto bg-[#F5F7FA] p-6 mb-5 rounded-lg  border border-gray-200">
        <h1 className="text-xl text-gray-90 font-semibold mb-3">
          Buscar Partes
        </h1>
        <div className="grid gap-6 mb-6 md:grid-cols-4">
          <div>
            <label
              htmlFor="ptcode"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              CÓDIGO PT
            </label>
            <input
              type="text"
              id="ptcode"
              // value={searchFast}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Buscar"
              // required
            />
          </div>
          <div>
            <label
              htmlFor="status"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              ESTADO
            </label>
            <input
              type="text"
              id="status"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Todos"
              // required
            />
          </div>
          <div>
            <label
              htmlFor="costcenter"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              CENTRO DE COSTO
            </label>
            <input
              type="text"
              id="costcenter"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Todos"
              // required
            />
          </div>
        </div>

        <div className="grid gap-6 mb-6 md:grid-cols-5">
          <div>
            <label
              htmlFor="datefrom"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              FECHA DESDE
            </label>
            <input
              type="text"
              id="datefrom"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="DD/MM/AAAA"
              // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              // required
            />
          </div>
          <div>
            <label
              htmlFor="dateuntil"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              FECHA HASTA
            </label>
            <input
              type="text"
              id="dateuntil"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="DD/MM/AAAA"
              // required
            />
          </div>
          <div>
            <label
              htmlFor="amountfrom"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              MONTO DESDE
            </label>
            <input
              type="text"
              id="amountfrom"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="0.00"
              // required
            />
          </div>
          <div>
            <label
              htmlFor="amountuntil"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              MONTO HASTA
            </label>
            <input
              type="text"
              id="amountuntil"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="0.00"
              // required
            />
          </div>

          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <button
              // type="button"
              // onClick={(e) => handleSearchFast(e)}
              className="px-3 py-2 text-sm font-medium text-center text-white bg-[#3666C2] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Buscar
            </button>
            <button
              type="button"
              className="px-3 py-2 text-sm font-medium text-center text-black border border-gray-400 cursor-pointer rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Limpiar
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
