import { DetalleTransferencia } from "../../interfaces/DetalleTransferencia"
import { TextArea } from "../atom/TextArea"

interface CardTextArea {
    label: string,
    isDisable?: boolean,
    tipo:string,
    detalleTransfer?: DetalleTransferencia | null
    
}

export const CardTexArea = ({ label, isDisable=false,tipo,detalleTransfer }: CardTextArea) => {
    return (
        <>
            <div className="px-2">
                < label htmlFor={tipo} className="block mb-2 text-sm font-medium text-gray-900 px-2 ">{label}</label>
                <TextArea isDisable={isDisable}  tipo={tipo} detalleTransfer={detalleTransfer}/>
            </div>
        </>
    )
}

