import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import {
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
} from "@heroicons/react/24/solid";
import {
  getEliminarTransferencia,
  getTransferencia,
} from "../../lib/fetchTransferencia";
import {
  onListingTransfer,
  onStartTransfLoading,
  onDeleteTranfer,
  toggleSelectTransfer,
  onUpdateTransfer,
  onAddTransfer,
  onAddListTransfer,
  onDeleteDeArregloTranfer,
} from "../../store/transferencia/transferenciaSlice";
import { useAppDispatch, useAppSelector } from "../../store/TransferenciaRedux";
import { ModalDetalle } from "../pages/ModalDetalle";
import { usePagination } from "../../hooks/usePagination";
import { ModalAprobacion } from "../pages/ModalAprobacion";
import { IListDetalleTransferencia } from "../../interfaces/IListDetalleTransferencia";
import { onListingDetaTransfer } from "../../store/detalleTransferencia/detalleTransferenciaSlice";
import ModalRechazo from "../pages/ModalRechazo";
import {
  setFiltroCodigo,
  setFiltroEstado,
  setFiltroMonto,
  setFiltroCosto,
  setFiltroFecha
} from "../../store/tablaTransferenciaSlice";
import { boolean } from "yup";

export const TransferManager = () => {
  const { selectedTransfers } = useAppSelector((state) => state.transferencias);
  const { filtroTransferencia } = useAppSelector((state) => state.filtros);

  useEffect(() => {
    obtenerTransf();
  }, []);

  const [openModalDetalle, setOpenModalDetalle] = useState(false);
  const [openModalAprobacion, setOpenModalAprobacion] = useState(false);
  const [openModalRechazar, setOpenModalRechazar] = useState(false);
  const [isAscending, setIsAscending] = useState(true);

  const dispatch = useAppDispatch();
  const { transferencias, booleanSelect } = useAppSelector(
    (state) => state.transferencias
  );
  /*const {listDetalleTransferencia } = useAppSelector(
    (state) => state.detalleTransferencia
  );*/
  const { currentItems, currentPage, maxPage, nextPage, prevPage, goToPage } =
    usePagination<IListDetalleTransferencia>(filtroTransferencia, 4);

  const obtenerTransf = async () => {
    dispatch(onStartTransfLoading());

    getTransferencia().then((response) => {
      if (!response.ok) {
        console.log("Responde Error");
      } else {
        dispatch(
          onListingTransfer(response.data as IListDetalleTransferencia[])
        );
        dispatch(setFiltroCodigo(response.data as IListDetalleTransferencia[]));
        dispatch(setFiltroEstado(response.data as IListDetalleTransferencia[]));
        dispatch(setFiltroMonto(response.data as IListDetalleTransferencia[]));
        dispatch(setFiltroCosto(response.data as IListDetalleTransferencia[]));
        dispatch(setFiltroFecha(response.data as IListDetalleTransferencia[]));
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

  // const handleSearchClick = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const valor = e.target.value;
  //   setsearchFast(valor);
  //   const newFilterTransfersFast = transferencias.filter(
  //     (item) =>
  //       item.codigo.toLowerCase().includes(valor)
  //   );
  //   setfilterTransfersFast(newFilterTransfersFast);
  // };

  const displayedItems = searchFast ? filterTransfersFast : currentItems;

  const sortTable = (column: keyof IListDetalleTransferencia) => {
    const sortedItems = [...transferencias].sort((a, b) => {
      let valueA = a[column];
      let valueB = b[column];

      if (typeof valueA === "string" && !isNaN(Number(valueA))) {
        valueA = Number(valueA);
      }
      if (typeof valueB === "string" && !isNaN(Number(valueB))) {
        valueB = Number(valueB);
      }

      if (typeof valueA === "number" && typeof valueB === "number") {
        return isAscending ? valueA - valueB : valueB - valueA;
      } else if (typeof valueA === "string" && typeof valueB === "string") {
        return isAscending
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      } else {
        return 0;
      }
    });

    dispatch(onListingTransfer(sortedItems));
    setIsAscending(!isAscending);
  };

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
                      checked={booleanSelect}
                      onChange={(e) => {
                        {
                          e.target.checked
                            ? dispatch(onAddListTransfer(displayedItems))
                            : dispatch(
                                onDeleteDeArregloTranfer(displayedItems)
                              );
                        }
                      }}
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
                <th
                  scope="col"
                  className="px-6 py-3  border border-gray-200 text-center"
                >
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
                <th
                  scope="col"
                  className="px-6 py-3  border border-gray-200 text-center"
                >
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
                <th
                  scope="col"
                  className="px-6 py-3  border border-gray-200 text-center"
                >
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
                          onChange={() => {
                            //dispatch(onArregloDetaTransfer(item));
                            dispatch(toggleSelectTransfer(item));
                          }}
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
                      {/* {formatDate(new Date(item.fecha_generacion))} */}
                      {item.fecha_generacion.toString()}
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
                          //dispatch(onArregloDetaTransfer(item));
                        }}
                        type="submit"
                        className="px-3 py-2 mr-2 text-xs font-medium text-center text-white bg-[#3666C2] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer"
                      >
                        V
                      </button>
                      <button
                        onClick={() => {
                          Swal.fire({
                            title: "Estas seguro de eliminar ?",
                            text: "Esta opcion no podra revertirse",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Sí, lo eliminare!",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              getEliminarTransferencia(item.codigo).then(
                                (response) => {
                                  if (!response.ok) {
                                  } else {
                                    dispatch(
                                      onDeleteTranfer(
                                        item as IListDetalleTransferencia
                                      )
                                    );
                                    Swal.fire({
                                      title: "Eliminado!",
                                      text: "Tu transferencias fue eliminada has.",
                                      icon: "success",
                                    });
                                  }
                                }
                              );
                            }
                          });
                        }}
                        type="submit"
                        className="px-3 py-2 text-xs font-medium text-center text-white bg-[#4A4A4A] rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer"
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
              disabled={selectedTransfers.length > 0 ? false : true}
              onClick={onApprove}
              type="button"
              className={`px-5 mr-3 py-2.5 text-sm font-medium text-white rounded-lg  ${
                selectedTransfers.length > 0
                  ? "bg-[#3666C2] hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer"
                  : "bg-gray-400"
              }`}
            >
              Aprobar
            </button>
            <button
              disabled={selectedTransfers.length > 0 ? false : true}
              type="button"
              onClick={() => setOpenModalRechazar(true)}
              className={`px-5 py-2.5 text-sm font-medium text-white rounded-lg ${
                selectedTransfers.length > 0
                  ? "bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer"
                  : "bg-gray-400"
              } `}
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
                  onClick={() => {
                    dispatch(onDeleteDeArregloTranfer(displayedItems));
                    goToPage(index + 1);
                  }}
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
          setStates={{
            setOpenModalDetalle,
            setOpenModalAprobacion,
            setOpenModalRechazar,
          }}
        />
      ) : null}
      {openModalAprobacion ? (
        <ModalAprobacion
          setState={setOpenModalAprobacion}
          detalle={selectedTransfers}
        />
      ) : null}

      {openModalRechazar ? (
        <ModalRechazo setState={setOpenModalRechazar} />
      ) : null}
    </>
  );
};
