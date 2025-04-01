import { useEffect, useState } from "react";
import { Button } from "../atom/Button";
import { BodyDetalle } from "../organismo/BodyDetalle";
import { HeaderBodyDetalle } from "../organismo/HeaderBodyDetalle";
import { HeaderDetalle } from "../organismo/HeaderDetalle";
import {
  getDetalleTransferencia,
  getTransferencia,
  sendDetalleTransferencia,
} from "../../lib/fetchTransferencia";
import { useAppDispatch, useAppSelector } from "../../store/TransferenciaRedux";
import {
  onListingTransfer,
  onStartTransfLoading,
} from "../../store/transferencia/transferenciaSlice";
//import { DetalleTransferencia } from "../../interfaces/DetalleTransferencia";
//import ModalRechazo from './ModalRechazo';
import {
  onArregloDetaTransfer,
  onListingDetaTransfer,
  onUpdateDetalleTransfer,
} from "../../store/detalleTransferencia/detalleTransferenciaSlice";
import { ModalAprobacion } from "./ModalAprobacion";
import { ITransfer } from "../../interfaces/ITransferCreate";
import { IListDetalleTransferencia } from "../../interfaces/IListDetalleTransferencia";

interface modalDetalleProps {
  setStates: {
    setOpenModalDetalle?: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenModalAprobacion?: React.Dispatch<React.SetStateAction<boolean>>;
  };
}
export const ModalDetalle = ({ setStates }: modalDetalleProps) => {
  const { setOpenModalDetalle, setOpenModalAprobacion } = setStates;

  const dispatch = useAppDispatch();
  //const { transferencias, loadingTransferencia, errorMessageTransferencia } = useAppSelector((state) => state.transferencias);
  const { detalleTransferencia, listDetalleTransferencia } = useAppSelector(
    (state) => state.detalleTransferencia
  );

  const obtenerTransf = async () => {
    dispatch(onStartTransfLoading());

    getTransferencia().then((response) => {
      if (!response.ok) {
        console.log("Responde Error");
      } else {
        dispatch(
          onListingTransfer(response.data as IListDetalleTransferencia[])
        );
        //console.log(response.data)
      }
    });
  };
  useEffect(() => {
    obtenerTransf();
  }, []);

  const onReturn = () => {
    setOpenModalDetalle && setOpenModalDetalle(false); // Cierra el modal
  };
  const onApprove = () => {
    setOpenModalDetalle && setOpenModalDetalle(false); // Cierra el modal
    setOpenModalAprobacion && setOpenModalAprobacion(true);
  };
  /* const sendAprove = () => {
    const actiones: DetalleTransferencia[] = listDetalleTransferencia?.map(
      (detalle) => {
        return {
          ...detalle,
          usuario_aprobador_id: 4,
          estado: "Aprobado",
          motivo_rechazo: "",
          referencia_sap: "SAP-458",
        };
      }
    );
    console.log(actiones);
    sendDetalleTransferencia(actiones).then((response) => {
      if (!response.ok) {
        console.log(response.message);
      } else {
        console.log(response.data);
      }
    });
  }; */
  /*  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const actiones: DetalleTransferencia = {
      ...detalleTransferencia!, // Spread solo si no es null
      observaciones: e.target.value,
    };
    dispatch(onUpdateDetalleTransfer(actiones));
  }; */

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center backdrop-blur-[12px] ">
        <div className="w-full max-w-2xl h-[85vh] max-h-[90vh] px-7">
          <HeaderDetalle onReturn={onReturn} detalleTransfer={detalleTransferencia} />
          <div className="bg-gray-200 shadow-lg pb-5">
            <HeaderBodyDetalle />
            <BodyDetalle detalleTransfer={detalleTransferencia} />
          </div>
          <div className="flex justify-center space-x-4 relative -top-3">
            <Button name="Aprobar" color="blue" onRetun={onApprove} />
            <Button name="Rechazar" color="red" />
            <Button name="Exportar PDF" color="gray" />
          </div>
        </div>
      </div>

      {/* {openModalAprobacion && (
        <ModalAprobacion
          detalle={listDetalleTransferencia}
          setState={setOpenModalAprobacion}
          onReturn={sendAprove}
        />
      )} */}
    </>
  );
};
