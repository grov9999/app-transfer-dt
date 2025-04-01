import { DetalleTransferencia } from "../../interfaces/DetalleTransferencia";
import { TextArea } from "../atom/TextArea";

interface CardTextArea {
  label: string;
  isDisable?: boolean;
  tipo: string;
  detalleTransfer?: DetalleTransferencia | null;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  padding?: boolean;
}

export const CardTexArea = ({
  label,
  isDisable = false,
  tipo,
  detalleTransfer,
  onChange,
  padding = true,
}: CardTextArea) => {
  return (
    <>
      <div className={`${padding ? "px-2" : ""} mt-3`}>
        <label
          htmlFor={tipo}
          className={`block mb-2 text-sm font-medium text-gray-900  ${
            padding ? "px-2" : ""
          }`}
        >
          {label}
        </label>
        <TextArea
          isDisable={isDisable}
          tipo={tipo}
          detalleTransfer={detalleTransfer}
          onChange={onChange}
        />
      </div>
    </>
  );
};
