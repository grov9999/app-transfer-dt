import { Button } from "../atom/Button"
import { Loading } from '../atom/Loading';

export const BodyAprobacion = () => {
    return (
        <div className="p-2">
            <h1 className="mb-2 px-1.5">Está a punto de Aprobar los siguientes partes de transferencia: </h1>
            {/* Contenedor de los detalles */}
            <div className="bg-gray-100 px-2 rounded-t-xl border-gray-400">

                <div className="flex justify-between py-2">
                    <span className="w-1/4">PT-002</span>
                    <span className="w-1/4">17/01/2025</span>
                    <span className="w-1/4">S/. 120.50</span>
                    <span className="w-1/4">CC-TRANS-02</span>
                </div>
                <div className="flex justify-between py-2">
                    <span className="w-1/4">PT-002</span>
                    <span className="w-1/4">17/01/2025</span>
                    <span className="w-1/4">S/ 120.50</span>
                    <span className="w-1/4">CC-TRANS-02</span>
                </div>
                <div className="flex justify-between py-2">
                    <span className="w-1/4">PT-002</span>
                    <span className="w-1/4">17/01/2025</span>
                    <span className="w-1/4">S/. 120.50</span>
                    <span className="w-1/4">CC-TRANS-02</span>
                </div>
                <div className="flex justify-between py-2">
                    <span className="w-1/4">PT-002</span>
                    <span className="w-1/4">17/01/2025</span>
                    <span className="w-1/4">S/. 120.50</span>
                    <span className="w-1/4">CC-TRANS-02</span>
                </div>
                <div className="flex justify-between py-2">
                    <span className="w-1/4">PT-002</span>
                    <span className="w-1/4">17/01/2025</span>
                    <span className="w-1/4">S/. 120.50</span>
                    <span className="w-1/4">CC-TRANS-05</span>
                </div>
            </div>
            {/* Total */}
            <div className="flex justify-between font-semibold bg-gray-200 p-2 border-t-1">
                <span className="w-1/2">Total:</span>
                <span className="w-1/2">S/ 596.30</span>
            </div>

            {/* Mensaje de advertencia */}
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-2 my-2 rounded-md">
                <p>
                    Esta acción enviará los datos a <b>SAP</b> y cambiará el estado
                    de los partes seleccionados a <b>"Aprobado"</b>.
                </p>
            </div>
            <div className="flex justify-center space-x-4 pt-3">
                <Button name='Confirmar y Enviar' color='blue' />
                <Button name='Cancelar' color='gray' />
            </div>
            <Loading />
        </div>

    )
}

