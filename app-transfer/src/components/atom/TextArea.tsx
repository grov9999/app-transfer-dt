import { UseFormRegisterReturn } from "react-hook-form";

interface TextAreaProps {
  isDisable?: boolean,
  tipo: string,
  detalleTransfer?: string,
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
  register?: UseFormRegisterReturn;

}

export const TextArea = ({ isDisable = false, tipo, detalleTransfer = "", onChange, register }: TextAreaProps) => {

  return (
    <textarea className={`block w-full  rounded-lg border border-gray-300 p-1 overflow-auto ${isDisable
      ? "text-sm text-gray-500 bg-gray-100"
      : "text-sm  text-gray-900"
      }`}name={tipo} id={tipo} rows={3} disabled={isDisable} value={detalleTransfer!} onChange={onChange} {...register} >
    </textarea>
  )
}

