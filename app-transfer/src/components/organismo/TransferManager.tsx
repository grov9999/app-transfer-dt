import { useEffect, useState } from "react";
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
  const [searchFast, setsearchFast] = useState("");
  const [filterTransfersFast, setfilterTransfersFast] = useState<
    IListDetalleTransferencia[]
  >([]);

  const handleSearchFast = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setsearchFast(valor);
    const newFilterTransfersFast = transferencias.filter(
      (item) =>
        item.codigo.toLowerCase().includes(valor) ||
        item.centro_costo.toLowerCase().includes(valor)
    );
    setfilterTransfersFast(newFilterTransfersFast);
  };
  const displayedItems = searchFast ? filterTransfersFast : currentItems;
  return (
    <>
      <div className="mx-auto rounded-lg ">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg pb-3">
          <div className="mb-2 flex items-center">
            <label htmlFor="buscar-rapido" className="mr-2">
              Buscar por:
            </label>
            <input
              type="text"
              id="buscar-rapido"
              value={searchFast}
              className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
              placeholder="Codigo PT o C. Costo"
              onChange={(e) => handleSearchFast(e)}
            />
          </div>
          <table className="w-full  text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-[#F5F7FA] ">
              <tr>
                {/* Encabezado de la tabla */}
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
                    />
                    {/* <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label> */}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3  border border-gray-200 text-center"
                >
                  Codigo
                </th>
                <th
                  scope="col"
                  className="px-6 py-3  border border-gray-200 text-center"
                >
                  Fecha
                </th>
                <th
                  scope="col"
                  className="px-6 py-3  border border-gray-200 text-center"
                >
                  Monto
                </th>
                <th
                  scope="col"
                  className="px-6 py-3  border border-gray-200 text-center"
                >
                  Centro Costo
                </th>
                <th
                  scope="col"
                  className="px-6 py-3  border border-gray-200 text-center"
                >
                  Ref. SAP
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center border border-gray-200"
                >
                  Estado
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center border border-gray-200"
                >
                  Acciones
                </th>
              </tr>
            </thead>

            {/* ## Cuerpo de la tabla */}
            <tbody>
              {displayedItems &&
                displayedItems.map((item: IListDetalleTransferencia) => (
                  <tr
                    className="bg-white  border border-gray-300"
                    key={Math.random()}
                  >
                    <td className="w-4 p-4  border border-gray-200">
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
                          htmlFor={`checkbox-table-search-${item.resultado_pt_id}`}
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 text-center whitespace-nowrap border border-gray-200 "
                    >
                      {item.codigo}
                    </td>
                    <td className="px-6 py-4  border border-gray-200 text-center">
                      {formatDate(new Date(item.fecha_generacion))}
                    </td>
                    <td className="px-6 py-4  border border-gray-200 text-center">
                      {item.monto_total ? item.monto_total : "--"}
                    </td>
                    <td className="px-6 py-4  border border-gray-200 text-center">
                      {item.centro_costo}
                    </td>
                    <td className="px-6 py-4  border border-gray-200 text-center">
                      {item.referencia_sap ? item.referencia_sap : "--"}
                    </td>
                    <td className="text-center">
                      <span
                        className={`text-center text-xs font-semibold px-3 py-2 rounded-3xl border-1 ${
                          item.estado == "Pendiente"
                            ? "bg-[#FEF8E3] text-yellow-500"
                            : item.estado == "Aprobado"
                            ? "bg-[#EAF5EA] text-green-500"
                            : "bg-[#FCECEE] text-red-500"
                        } border-2`}
                      >
                        {item.estado}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
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
                        className="px-3 py-2 mr-2 text-xs font-medium text-center text-white bg-[#3666C2] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                      >
                        V
                      </button>
                      <button
                        type="submit"
                        className="px-3 py-2 text-xs font-medium text-center text-white bg-[#4A4A4A] rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                      >
                        E
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <div className="flex-wrap justify-center  border border-gray-200 bg-[#F5F7FA]  mt-5 py-3 pl-3">
            <button
              onClick={onApprove}
              type="button"
              className="px-5 mr-3 py-2.5 text-sm font-medium text-white bg-[#3666C2] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center"
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
                  {`<<`}
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
                  {`>>`}
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
