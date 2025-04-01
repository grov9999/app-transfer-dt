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
} from "../../store/transferencia/TransferenciaSlice";
import { Transferencia } from "../../interfaces/Transferencia";
import { DetalleTransferencia } from "../../interfaces/DetalleTransferencia";
import {
    onListingDetaTransfer,
    onUpdateDetalleTransfer,
} from "../../store/detalleTransferencia/detalleTransferenciaSlice";

export const ModalDetalle = () => {
    /*
      REDUX
       */
    const dispatch = useAppDispatch();
    const { transferencia, loadingTransferencia, errorMessageTransferencia } = useAppSelector((state) => state.transferencia);
    const { detalleTransferencia, loadingDeTransferencia, errorMessageDeTransferencia } = useAppSelector((state) => state.detalleTransferencia);

    const obtenerTransf = async () => {
        dispatch(onStartTransfLoading());

        getTransferencia().then((response) => {
            if (!response.ok) {
                console.log("Responde Error");
            } else {
                dispatch(onListingTransfer(response.data as Transferencia[]));
                //console.log(response.data)
            }
        });
    };
    const obtenerTransfDetalle = async () => {
        getDetalleTransferencia("5").then((response) => {
            if (!response.ok) {
                //console.log("Responde Error")
            } else {
                dispatch(onListingDetaTransfer(response.data as DetalleTransferencia));
                // setActionDeTransfer(response.data as DetalleTransferencia)
                /*console.log(response.data)*/
            }
        });
    };

    useEffect(() => {
        obtenerTransf();
    }, []);

    const [openModalDetalle, setOpenModalDetalle] = useState(false);
    const onReturn = () => {
        console.log(transferencia, loadingTransferencia, errorMessageTransferencia);
        console.log(detalleTransferencia, loadingDeTransferencia, errorMessageDeTransferencia
        );
        setOpenModalDetalle(false);
    };
    // const [actionDeTransfer, setActionDeTransfer] = useState<DetalleTransferencia>();

    const onApprove = () => {

        const actiones: DetalleTransferencia = {
            ...detalleTransferencia!, // Spread solo si no es null
            usuario_aprobador_id: 4,
            estado: "Aprobado",
            motivo_rechazo: "2",
            referencia_sap: "SAP-458",
        };
        console.log(actiones);
        sendDetalleTransferencia(actiones).then((response) => {
            if (!response.ok) {
                // Manejo de error
                console.log(response.message)
            } else {
                //dispatch(onListingDetaTransfer(response.data as DetalleTransferencia));
                console.log(response.data)
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
                    obtenerTransfDetalle();
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
        </>
    );
};
