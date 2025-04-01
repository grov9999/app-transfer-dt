import { UseFormRegisterReturn } from "react-hook-form";
import { TextArea } from "../atom/TextArea";

interface CardTextArea {
  label: string;
  isDisable?: boolean;
  tipo: string;
  detalleTransfer?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  padding?: boolean;
  register?: UseFormRegisterReturn;
}

export const CardTexArea = ({
  label,
  isDisable = false,
  tipo,
  detalleTransfer = "",
  onChange,
  padding = true,
  register,
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
          detalleTransfer={detalleTransfer!}
          onChange={onChange}
          register={register}
        />
      </div>
    </>
  );
};
