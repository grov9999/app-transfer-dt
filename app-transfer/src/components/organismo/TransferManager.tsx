import { useEffect, useState } from "react";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
} from "@heroicons/react/24/solid";
import { getTransferencia } from "../../lib/fetchTransferencia";
import {
  onListingTransfer,
  onStartTransfLoading,
  toggleSelectTransfer,
} from "../../store/transferencia/transferenciaSlice";
import { useAppDispatch, useAppSelector } from "../../store/TransferenciaRedux";
import { ModalDetalle } from "../pages/ModalDetalle";
import { usePagination } from "../../hooks/usePagination";
import { ModalAprobacion } from "../pages/ModalAprobacion";
import { IListDetalleTransferencia } from "../../interfaces/IListDetalleTransferencia";
import { formatDate } from "../../utils/formatDate";
import { onListingDetaTransfer } from "../../store/detalleTransferencia/detalleTransferenciaSlice";
import ModalRechazo from "../pages/ModalRechazo";

export const TransferManager = () => {
  const { selectedTransfers } = useAppSelector((state) => state.transferencias);
  useEffect(() => {
    obtenerTransf();
  }, []);

  const [openModalDetalle, setOpenModalDetalle] = useState(false);
  const [openModalAprobacion, setOpenModalAprobacion] = useState(false);
  const [openModalRechazar, setOpenModalRechazar] = useState(false);
  const [isAscending, setIsAscending] = useState(true);

  const dispatch = useAppDispatch();
  const { transferencias } = useAppSelector((state) => state.transferencias);
  const { listDetalleTransferencia } = useAppSelector(
    (state) => state.detalleTransferencia
  );
  const { currentItems, currentPage, maxPage, nextPage, prevPage, goToPage } =
    usePagination<IListDetalleTransferencia>(transferencias, 4);

  const obtenerTransf = async () => {
    dispatch(onStartTransfLoading());

    getTransferencia().then((response) => {
      if (!response.ok) {
        console.log("Responde Error");
      } else {
        dispatch(
          onListingTransfer(response.data as IListDetalleTransferencia[])
        );
      }
    });
  };

  const onApprove = () => {
    setOpenModalDetalle(false);
    setOpenModalAprobacion(true);
  };

  // Función para ordenar datos
  const sortTable = (column: keyof IListDetalleTransferencia) => {
    const sortedItems = [...transferencias].sort((a, b) => {
      const valueA =
        typeof a[column] === "string" ? a[column].toString() : a[column];
      const valueB =
        typeof b[column] === "string" ? b[column].toString() : b[column];

      if (typeof valueA === "number" && typeof valueB === "number") {
        return isAscending ? valueA - valueB : valueB - valueA;
      } else if (typeof valueA === "string" && typeof valueB === "string") {
        return isAscending
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      } else {
        return 0; // Para casos no manejados
      }
    });
    // Update the state or variable holding the sorted items
    dispatch(onListingTransfer(sortedItems)); // Actualiza los datos ordenados
    setIsAscending(!isAscending); // Alterna entre ascendente y descendente
  };

  return (
    <>
      <div className="mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200">
              <tr>
                {/* Encabezado de la tabla */}
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
                  <button
                    className="text-2xl text-blue-500 hover:text-blue-700 focus:outline-none"
                    onClick={() => sortTable("codigo")}
                  >
                    {isAscending ? (
                      <ArrowUpCircleIcon className="w-6 h-6 inline" />
                    ) : (
                      <ArrowDownCircleIcon className="w-6 h-6 inline" />
                    )}
                  </button>
                </th>
                <th scope="col" className="px-6 py-3">
                  Fecha
                  <button
                    className="text-2xl text-blue-500 hover:text-blue-700 focus:outline-none"
                    onClick={() => sortTable("fecha_generacion")}
                  >
                    {isAscending ? (
                      <ArrowUpCircleIcon className="w-6 h-6 inline" />
                    ) : (
                      <ArrowDownCircleIcon className="w-6 h-6 inline" />
                    )}
                  </button>
                </th>
                <th scope="col" className="px-6 py-3">
                  Monto
                  <button
                    className="text-2xl text-blue-500 hover:text-blue-700 focus:outline-none"
                    onClick={() => sortTable("monto_total")}
                  >
                    {isAscending ? (
                      <ArrowUpCircleIcon className="w-6 h-6 inline" />
                    ) : (
                      <ArrowDownCircleIcon className="w-6 h-6 inline" />
                    )}
                  </button>
                </th>
                <th scope="col" className="px-6 py-3">
                  Centro Costo
                  <button
                    className="text-2xl text-blue-500 hover:text-blue-700 focus:outline-none"
                    onClick={() => sortTable("centro_costo")}
                  >
                    {isAscending ? (
                      <ArrowUpCircleIcon className="w-6 h-6 inline" />
                    ) : (
                      <ArrowDownCircleIcon className="w-6 h-6 inline" />
                    )}
                  </button>
                </th>
                <th scope="col" className="px-6 py-3">
                  Ref. SAP
                </th>
                <th scope="col" className="px-6 py-3">
                  Estado
                  <button
                    className="text-2xl text-blue-500 hover:text-blue-700 focus:outline-none"
                    onClick={() => sortTable("estado")}
                  >
                    {isAscending ? (
                      <ArrowUpCircleIcon className="w-6 h-6 inline" />
                    ) : (
                      <ArrowDownCircleIcon className="w-6 h-6 inline" />
                    )}
                  </button>
                </th>
                <th scope="col" className="px-6 py-3">
                  Acciones
                </th>
              </tr>
            </thead>

            {/* ## Cuerpo de la tabla */}
            <tbody>
              {currentItems &&
                currentItems.map((item: IListDetalleTransferencia) => (
                  <tr className="bg-white border-b" key={item.resultado_pt_id}>
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id={`checkbox-table-search-${item.resultado_pt_id}`}
                          type="checkbox"
                          checked={selectedTransfers.some(
                            (transfer) =>
                              transfer.resultado_pt_id === item.resultado_pt_id
                          )}
                          onChange={() => dispatch(toggleSelectTransfer(item))}
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
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {item.codigo}
                    </td>
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
                    <td>
                      <p
                        className={`text-center text-sm font-semibold px-3 py-3 rounded-3xl border-1 ${
                          item.estado == "Pendiente"
                            ? "bg-[#FEF8E3] text-yellow-500"
                            : item.estado == "Aprobado"
                            ? "bg-[#EAF5EA] text-green-500"
                            : "bg-[#FCECEE] text-red-500"
                        } border-2`}
                      >
                        {item.estado}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => {
                          setOpenModalDetalle(true);
                          dispatch(
                            onListingDetaTransfer(
                              item as IListDetalleTransferencia
                            )
                          );
                        }}
                        type="submit"
                        className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                      >
                        V
                      </button>
                      <button
                        type="submit"
                        className="px-3 py-2 text-xs font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                      >
                        E
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          {/* BOTON ACEPTAR Y RECHAZAR */}
          <div className="flex-wrap justify-center">
            {/* <div className="grid gap-6 mb-6 md:grid-cols-2"> */}
            <button
              onClick={onApprove}
              type="button"
              className="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center"
            >
              Aprobar
            </button>
            <button
              type="button"
              onClick={() => setOpenModalRechazar(true)}
              className="px-5 py-2.5 text-sm font-medium text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center"
            >
              Rechazar
            </button>
          </div>

          {/* ## PAGINACIÓN */}
          <nav
            className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-gray-50 mb-4 md:mb-0 block w-full md:inline md:w-auto">
              Showing <span className="font-semibold text-gray-50">1-4</span>{" "}
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
      {/* {openModalDetalle && <ModalDetalle setState={setOpenModalAprobacion} />} */}
      {openModalDetalle ? (
        <ModalDetalle
          setStates={{ setOpenModalDetalle, setOpenModalAprobacion }}
        />
      ) : null}
      {openModalAprobacion ? (
        <ModalAprobacion
          setState={setOpenModalAprobacion}
          detalle={listDetalleTransferencia}
          onReturn={onApprove}
        />
      ) : null}

      {openModalRechazar ? (
        <ModalRechazo setState={setOpenModalRechazar} />
      ) : null}
    </>
  );
};
