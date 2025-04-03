import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/TransferenciaRedux";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { setFiltroCodigo } from "../../store/tablaTransferenciaSlice";
import { SelectTransfer } from "../molecules/SelectTransfer";
import { InputTransfer } from "../molecules/InputTransfer";

export const TransferSearch = () => {
  const today = new Date().toISOString().split("T")[0];
  const navigate = useNavigate();
  const { transferencias } = useAppSelector((state) => state.transferencias);
  const handleCreate = () => {
    navigate("/create");
  };

  const dispatch = useDispatch();

  const [searchCode, setSearchCode] = useState("");
  const [searchStatus, setSearchStatus] = useState("");
  const [searchAmountStart, setSearchAmountStart] = useState("");
  const [searchAmountEnd, setSearchAmountEnd] = useState("");
  const [searchCost, setSearchCost] = useState("");
  const [searchDateStart, setsearchDateStart] = useState("");
  const [searchDateEnd, setSearchDateEnd] = useState("");

  const handleLimpiar = (e: FormEvent) => {
    e.preventDefault();
    setSearchCode("");
    setSearchStatus("");
    setSearchAmountStart("");
    setSearchAmountEnd("");
    setSearchCost("");
    setsearchDateStart("");
    setSearchDateEnd("");

    dispatch(setFiltroCodigo(transferencias));
  };

  const handleFilterCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setSearchCode(valor);
  };

  const handleFilterStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const valor = e.target.value;
    setSearchStatus(valor);
  };

  const handleFilterAmountStart = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setSearchAmountStart(valor);
  };

  const handleFilterAmountEnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setSearchAmountEnd(valor);
  };

  const handleFilterCost = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setSearchCost(valor);
  };

  const handleFilterDateStart = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setsearchDateStart(valor);
  };

  const handleFilterDateEnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setSearchDateEnd(valor);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const montoMin = parseFloat(searchAmountStart) || 0;
    const montoMax = parseFloat(searchAmountEnd) || 999999;

    const fechaInicio = searchDateStart
      ? new Date(`${searchDateStart}T00:00:00`)
      : new Date(2000, 0, 1);

    const fechaFinal = searchDateEnd
      ? new Date(`${searchDateEnd}T23:59:59.999`)
      : new Date();

    fechaFinal.setHours(23, 59, 59, 999);

    const newFilterTransfer = transferencias.filter((item) => {
      const montoEvaluar = parseFloat(item.monto_total);
      const fechaEvaluar = new Date(item.fecha_generacion);

      return (
        item.codigo.toLowerCase().includes(searchCode.toLowerCase()) &&
        item.estado
          .toLocaleLowerCase()
          .includes(searchStatus.toLocaleLowerCase()) &&
        item.centro_costo
          .toLocaleLowerCase()
          .includes(searchCost.toLocaleLowerCase()) &&
        montoEvaluar >= montoMin &&
        montoEvaluar <= montoMax &&
        fechaEvaluar >= fechaInicio &&
        fechaEvaluar <= fechaFinal
      );
    });
    dispatch(setFiltroCodigo(newFilterTransfer));
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
            <InputTransfer
              id="ptcode"
              value={searchCode}
              onChange={handleFilterCode}
              placeholder="Buscar..."
              label="CÓDIGO PT"
              type="text"
            />
          </div>
          <div>
            <SelectTransfer
              id="status"
              value={searchStatus}
              onChange={handleFilterStatus}
              label="ESTADO"
              options={[
                { value: "", label: "Seleccionar estado" },
                { value: "Pendiente", label: "Pendiente" },
                { value: "Rechazado", label: "Rechazado" },
                { value: "Aprobado", label: "Aprobado" },
              ]}
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
              value={searchCost}
              onChange={handleFilterCost}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
              type="date"
              id="datefrom"
              max={today}
              value={searchDateStart}
              onChange={handleFilterDateStart}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
              type="date"
              max={today}
              id="dateuntil"
              value={searchDateEnd}
              onChange={handleFilterDateEnd}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
              value={searchAmountStart}
              onChange={handleFilterAmountStart}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
              value={searchAmountEnd}
              onChange={handleFilterAmountEnd}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
