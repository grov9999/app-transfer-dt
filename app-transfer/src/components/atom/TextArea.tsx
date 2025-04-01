import { DetalleTransferencia } from "../../interfaces/DetalleTransferencia";

interface TextAreaProps {
  isDisable?: boolean;
  tipo: string;
  detalleTransfer?: DetalleTransferencia | null;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea = ({
  isDisable = false,
  tipo,
  detalleTransfer,
  onChange,
}: TextAreaProps) => {
  /* const handleOnchange = (e: React.ChangeEvent<HTMLTextAreaElement>) => { 
        console.log(e)
       // setinputValidate(e.target.value)
    }*/

  return (
    <textarea
      rows={4}
      className={`block w-full  rounded-lg border border-gray-300 p-1 overflow-auto ${
        isDisable
          ? "text-sm text-gray-500 bg-gray-100"
          : "text-sm  text-gray-900"
      }`}
      name={tipo}
      id={tipo}
      disabled={isDisable}
      value={detalleTransfer?.log_detalle}
      onChange={onChange}
    ></textarea>
  );
};
