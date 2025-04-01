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

export const getDetalleTransferencia = async (id: string) => {
    try {
        const response = await fetch("http://localhost:3000/api/transfer/" + id);
        const datas = await response.json();
        const data: DetalleTransferencia = datas.data;

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

export const sendDetalleTransferencia = async (actionTransferencia:DetalleTransferencia|null) => {
    try {
        const response = await fetch("http://localhost:3000/api/updateStatus", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(actionTransferencia)
        });
        const data = await response.json();

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