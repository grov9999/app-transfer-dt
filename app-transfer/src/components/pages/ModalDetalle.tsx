import { Button } from "../atom/Button";
import { BodyDetalle } from "../organismo/BodyDetalle";
import { HeaderBodyDetalle } from "../organismo/HeaderBodyDetalle";
import { HeaderDetalle } from "../organismo/HeaderDetalle";

import { useAppDispatch, useAppSelector } from "../../store/TransferenciaRedux";
import { IListDetalleTransferencia } from "../../interfaces/IListDetalleTransferencia";
import { onUpdateArregloTransferencia } from "../../store/transferencia/transferenciaSlice";

interface modalDetalleProps {
  setStates: {
    setOpenModalDetalle?: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenModalAprobacion?: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenModalRechazar?: React.Dispatch<React.SetStateAction<boolean>>;
  };
}
export const ModalDetalle = ({ setStates }: modalDetalleProps) => {
  const dispatch = useAppDispatch();

  const { setOpenModalDetalle, setOpenModalAprobacion, setOpenModalRechazar } =
    setStates;

  const { detalleTransferencia } = useAppSelector(
    (state) => state.detalleTransferencia
  );

  const onReturn = () => {
    setOpenModalDetalle && setOpenModalDetalle(false); // Cierra el modal
  };
  const onApprove = () => {
    dispatch(
      onUpdateArregloTransferencia(
        detalleTransferencia as IListDetalleTransferencia
      )
    );
    setOpenModalDetalle && setOpenModalDetalle(false); // Cierra el modal
    setOpenModalAprobacion && setOpenModalAprobacion(true);
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center backdrop-blur-[1px] ">
        <div className="w-full sm:max-w-xl md:max-w-lg lg:max-w-4xl px-7 overflow-auto">
          <HeaderDetalle
            onReturn={onReturn}
            detalleTransfer={detalleTransferencia}
          />
          <div className="bg-gray-200 shadow-lg pb-5">
            <HeaderBodyDetalle />
            <BodyDetalle detalleTransfer={detalleTransferencia} />
          </div>
          <div className="flex justify-center space-x-4 relative -top-3">
            <Button name="Aprobar" color="blue" onRetun={onApprove} />
            <Button
              name="Rechazar"
              color="red"
              onRetun={() => {
                dispatch(
                  onUpdateArregloTransferencia(
                    detalleTransferencia as IListDetalleTransferencia
                  )
                );
                setOpenModalDetalle && setOpenModalDetalle(false); // Cierra el modal
                setOpenModalRechazar && setOpenModalRechazar(true);
              }}
            />
            <Button name="Exportar PDF" color="gray" />
          </div>
        </div>
      </div>
    </>
  );
};
