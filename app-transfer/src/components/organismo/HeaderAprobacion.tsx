import { X } from "lucide-react";

export const HeaderAprobacion = () => {
    return (
        <div className="relative bg-blue-600 rounded px-4 py-1">
            <button
                className="absolute top-2 right-2 text-6xl text-white hover:text-black">
                <X size={20} strokeWidth={4} />
            </button>
            <h2 className="text-xl font-semibold text-white">Aprobar y Enviar Partes a SAP</h2>
        </div>
    )
}

