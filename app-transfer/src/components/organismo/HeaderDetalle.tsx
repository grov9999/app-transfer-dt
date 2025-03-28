import { Button } from "../atom/Button";

interface HeaderDetalleProp{
    onReturn?: ()=>void;
}

export const HeaderDetalle = ({onReturn}:HeaderDetalleProp) => {
    return (
        <div className="flex items-center py-2">
            <div>
                <h1 className="text-xl font-bold">Consulta Parte Transferencia</h1>
                <p className="text-gray-600">Código PT: PT-003</p>
            </div>
            <div className="ml-auto">
            <Button name="← Volver al listado" color="gray" onRetun={onReturn} />
            </div>
        </div>
        
    );
};
