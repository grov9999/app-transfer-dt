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
import { DetalleTransferencia } from "../../interfaces/DetalleTransferencia";
//import ModalRechazo from './ModalRechazo';
import {
  onArregloDetaTransfer,
  onListingDetaTransfer,
  onUpdateDetalleTransfer,
} from "../../store/detalleTransferencia/detalleTransferenciaSlice";
import { ModalAprobacion } from "./ModalAprobacion";
import { ITransfer } from "../../interfaces/ITransferCreate";

export const ModalDetalle = () => {
  /*
      REDUX
       */
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
        dispatch(onListingTransfer(response.data as ITransfer[]));
        //console.log(response.data)
      }
    });
  };
  const obtenerTransfDetalle = async (id: string) => {
    getDetalleTransferencia(id).then((response) => {
      if (!response.ok) {
        //console.log("Responde Error")
      } else {
        dispatch(onListingDetaTransfer(response.data as DetalleTransferencia));
        dispatch(onArregloDetaTransfer(response.data as DetalleTransferencia));
      }
    });
  };

  useEffect(() => {
    obtenerTransf();
  }, []);

  const [openModalDetalle, setOpenModalDetalle] = useState(false);
  const [openModalAprobacion, setOpenModalAprobacion] = useState(false);

  const onReturn = () => {
    setOpenModalDetalle(false);
  };
  // const [actionDeTransfer, setActionDeTransfer] = useState<DetalleTransferencia>();

  const onApprove = () => {
    setOpenModalDetalle(false);
    setOpenModalAprobacion(true);
  };
  const sendAprove = () => {
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
  };
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const actiones: DetalleTransferencia = {
      ...detalleTransferencia!, // Spread solo si no es null
      observaciones: e.target.value,
    };
    dispatch(onUpdateDetalleTransfer(actiones));
  };

  return (
    <>
      <button
        type="submit"
        onClick={() => {
          setOpenModalDetalle(true);
          obtenerTransfDetalle("15");
        }}
      >
        Modal
      </button>
      {/*  {openModalDetalle &&
                    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-[0.7px]">
                        <div className="w-[50%] h-3/4 px-7 max-w-full">
                            <HeaderDetalle onReturn={onReturn} />
                            <div className=" w-full h-[85%] bg-gray-200 shadow-lg ">
                                <HeaderBodyDetalle />
                                <BodyDetalle />
                                <div className="flex justify-center space-x-4 pt-2">
                                    <Button name='Aprobar' color='blue' />
                                    <Button name='Rechazar' color='red' />
                                    <Button name='Exportar PDF' color='gray' />
                                </div>
                            </div>
                        </div>
                    </div>
                } */}
      {openModalDetalle && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-[0.7px]">
          <div className="w-full max-w-2xl h-[85vh] max-h-[90vh] px-7">
            <HeaderDetalle
              onReturn={onReturn}
              detalleTransfer={detalleTransferencia}
            />
            <div className="bg-gray-200 shadow-lg pb-5">
              <HeaderBodyDetalle />
              <BodyDetalle
                detalleTransfer={detalleTransferencia}
                onChange={onChange}
              />
            </div>
            <div className="flex justify-center space-x-4 relative -top-3">
              <Button name="Aprobar" color="blue" onRetun={onApprove} />
              <Button name="Rechazar" color="red" />
              <Button name="Exportar PDF" color="gray" />
            </div>
          </div>
        </div>
      )}
      {openModalAprobacion && (
        <ModalAprobacion
          detalle={listDetalleTransferencia}
          setState={setOpenModalAprobacion}
          onReturn={sendAprove}
        />
      )}
    </>
  );
};
