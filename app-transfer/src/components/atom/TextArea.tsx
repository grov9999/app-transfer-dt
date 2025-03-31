import { DetalleTransferencia } from "../../interfaces/DetalleTransferencia"

interface TextAreaProps {
    isDisable?: boolean,
    tipo: string,
    detalleTransfer?: DetalleTransferencia | null
    
}

export const TextArea = ({ isDisable = false,tipo,detalleTransfer }: TextAreaProps) => {
    return (
        <textarea className={`block w-full bg-gray-50 rounded-lg border border-gray-300 p-1 overflow-auto ${isDisable? "text-xs text-gray-500":"text-sm  text-gray-900"}`} name={tipo} id={tipo} rows={3} disabled={isDisable} value={detalleTransfer?.log_detalle}>
        </textarea>
    )
}

