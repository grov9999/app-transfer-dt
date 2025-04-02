import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/TransferenciaRedux";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { setFiltroCodigo } from "../../store/tablaTransferenciaSlice";

export const TransferSearch = () => {
  const navigate = useNavigate();
  const { transferencias } = useAppSelector((state) => state.transferencias);
  const handleCreate = () => {
    navigate("/create");
  };

  const dispatch = useDispatch();

  const [searchCod, setSearchCod] = useState("");
  const [searchEst, setSearchEst] = useState("");
  const [searchMon, setSearchMon] = useState("");
  const [searchMonFin, setSearchMonFin] = useState("");
  const [searchCost, setSearchCost] = useState("");
  const [searchFech, setSearchFech] = useState("");
  const [searchFechFin, setSearchFechFin] = useState("");

  const handleLimpiar = (e: FormEvent) => {
    e.preventDefault();
    setSearchCod("");
    setSearchEst("");
    setSearchMon("");
    setSearchMonFin("");
    setSearchCost("");
    setSearchFech("");
    setSearchFechFin("");
  };

  const handleFiltros = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setSearchCod(valor);
  };

  const handleFiltrosEst = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const valor = e.target.value;
    setSearchEst(valor);
  };

  const handleFiltrosMon = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setSearchMon(valor);
  };

  const handleFiltrosMonFin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setSearchMonFin(valor);
  };

  const handleFiltrosCost = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setSearchCost(valor);
  };

  const handleFiltrosFech = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setSearchFech(valor);
  };

  const handleFiltrosFechFin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setSearchFechFin(valor);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const montoMin = parseFloat(searchMon) || 0;
    const montoMax = parseFloat(searchMonFin) || 999999;


    const newFiltrosCod = transferencias.filter((item) => {
      const montoEvaluar = parseFloat(item.monto_total);
      return (
        item.codigo.toLowerCase().includes(searchCod.toLowerCase()) &&
        item.estado
          .toLocaleLowerCase()
          .includes(searchEst.toLocaleLowerCase()) &&
        item.centro_costo
          .toLocaleLowerCase()
          .includes(searchCost.toLocaleLowerCase()) &&
        montoEvaluar >= montoMin &&
        montoEvaluar <= montoMax
      );
    });
    dispatch(setFiltroCodigo(newFiltrosCod));
  };

  return (
    <form onSubmit={handleSubmit}>
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
              value={searchCod}
              onChange={handleFiltros}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Buscar..."
            />
          </div>
          <div>
            <label
              htmlFor="status"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              ESTADO
            </label>
            <select
              id="status"
              value={searchEst}
              onChange={handleFiltrosEst}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option key="0" value="">
                Seleccionar estado
              </option>
              <option key="1" value="Pendiente">
                Pendiente
              </option>
              <option key="2" value="Rechazado">
                Rechazado
              </option>
              <option key="3" value="Aprobado">
                Aprobado
              </option>
            </select>
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
              value={searchCost}
              onChange={handleFiltrosCost}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Todos"
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
              value={searchFech}
              onChange={handleFiltrosFech}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="DD/MM/AAAA"
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
              value={searchFechFin}
              onChange={handleFiltrosFechFin}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="DD/MM/AAAA"
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
              value={searchMon}
              onChange={handleFiltrosMon}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="0.00"
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
              value={searchMonFin}
              onChange={handleFiltrosMonFin}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="0.00"
            />
          </div>

          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <button
              type="submit"
              className="px-3 py-2 text-sm font-medium text-center text-white bg-[#3666C2] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Buscar
            </button>
            <button
              type="button"
              onClick={handleLimpiar}
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
