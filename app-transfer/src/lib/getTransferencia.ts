import { DetalleTransferencia } from "../interfaces/DetalleTransferencia";
import { Transferencia } from "../interfaces/Transferencia";

export const getTransferencia = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/transfers");
        const datas = await response.json();
        const data: Transferencia[] = datas.data;
        //console.log(data);
        //await sleep(1500);
        return {
            ok: true,
            data,
        };
    } catch (error) {
        return {
            ok: false,
            message: (error as Error).message,
        };
    }
}

export const getDetalleTransferencia = async ( id : string) => {
    try {
        const response = await fetch("http://localhost:3000/api/transfer/" + id);
        const data: DetalleTransferencia = await response.json();
        //console.log(data);
        //await sleep(1500);
        return {
            ok: true,
            data,
        };
    } catch (error) {
        return {
            ok: false,
            message: (error as Error).message,
        };
    }
}