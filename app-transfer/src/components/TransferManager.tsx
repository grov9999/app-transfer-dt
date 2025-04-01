import { useEffect } from "react";
import { ITransfer } from "../interfaces/ITransferCreate";
import { getTransferencia } from "../lib/fetchTransferencia";
import {
  onListingTransfer,
  onStartTransfLoading,
} from "../store/transferencia/transferenciaSlice";
import { useAppDispatch, useAppSelector } from "../store/TransferenciaRedux";
import { ModalDetalle } from "./pages/ModalDetalle";
import { usePagination } from "../hooks/usePagination";

export const TransferManager = () => {
  useEffect(() => {
    obtenerTransf();
  }, []);

  const dispatch = useAppDispatch();
  const { transferencias, loadingTransferencia, errorMessageTransferencia } =
    useAppSelector((state) => state.transferencias);

  const { currentItems, currentPage, maxPage, nextPage, prevPage, goToPage } =
    usePagination<ITransfer>(transferencias, 4);

  const obtenerTransf = async () => {
    dispatch(onStartTransfLoading());

    getTransferencia().then((response) => {
      if (!response.ok) {
        console.log("Responde Error");
      } else {
        dispatch(onListingTransfer(response.data as ITransfer[]));
        //console.log(response.data)
      }
    });
  };

  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0"); // Asegura que el día tenga dos dígitos
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Los meses son 0-indexados
    const year = date.getFullYear(); // Obtiene el año completo
    return `${day}/${month}/${year}`; // Formato DD/MM/YYYY
  };

  return (
    <>
      <div className="mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Codigo
                </th>
                <th scope="col" className="px-6 py-3">
                  Fecha
                </th>
                <th scope="col" className="px-6 py-3">
                  Monto
                </th>
                <th scope="col" className="px-6 py-3">
                  Centro Costo
                </th>
                <th scope="col" className="px-6 py-3">
                  Ref. SAP
                </th>
                <th scope="col" className="px-6 py-3">
                  Estado
                </th>
                <th scope="col" className="px-6 py-3">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems &&
                currentItems.map((item) => (
                  <tr className="bg-white border-b" key={item.id}>
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {item.codigo}
                    </th>
                    <td className="px-6 py-4">
                      {formatDate(new Date(item.fecha_generacion))}
                    </td>
                    <td className="px-6 py-4">
                      {item.monto_total ? item.monto_total : "--"}
                    </td>
                    <td className="px-6 py-4">{item.centro_costo}</td>
                    <td className="px-6 py-4">
                      {item.referencia_sap ? item.referencia_sap : "--"}
                    </td>
                    <td className="px-6 py-4">{item.estado}</td>
                    <td className="px-6 py-4">
                      <button
                        type="button"
                        className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        V
                      </button>
                      <button
                        type="button"
                        className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        E
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="flex-wrap justify-center">
            <button
              type="button"
              className="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center"
            >
              Aprobar
            </button>
            <button
              type="button"
              className="px-5 py-2.5 text-sm font-medium text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center"
            >
              Rechazar
            </button>
            <button
              type="button"
              className="px-5 py-2.5 text-sm font-medium text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center"
            >
              Consultar
            </button>
          </div>
          <nav
            className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-gray-50 mb-4 md:mb-0 block w-full md:inline md:w-auto">
              Showing <span className="font-semibold text-gray-900">1-10</span>{" "}
              of <span className="font-semibold text-gray-900">1000</span>
            </span>
            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
              <li>
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  Previous
                </button>
              </li>
              {[...Array(maxPage)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === index + 1
                      ? "bg-blue-600 text-white"
                      : "border border-e-0 border-gray-300 rounded-s-lg"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <li>
                <button
                  onClick={nextPage}
                  disabled={currentPage === maxPage}
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <ModalDetalle />
    </>
  );
};
