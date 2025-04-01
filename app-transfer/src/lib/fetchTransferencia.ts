import { DetalleTransferencia } from "../interfaces/DetalleTransferencia";
import { ITransfer } from "../interfaces/ITransferCreate";
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
};

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
};

export const getAlmacenes = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/almacenes");
    const datas = await response.json();
    const data = datas.data;
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
};

export const createTransferencia = async (datos: ITransfer) => {
  try {
    const response = await fetch("http://localhost:3000/api/transfer/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        almacen_origen_id: datos.almacen_origen_id,
        almacen_destino_id: datos.almacen_destino_id,
        centro_costo: datos.centro_costo,
        monto_total: datos.monto_total,
        usuario_creador_id: datos.usuario_creador_id,
        observaciones: datos.observaciones,
      }),
    });
    const data: ITransfer = await response.json();
    console.log(data);
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
};


export const sendDetalleTransferencia = async (actionTransferencia: DetalleTransferencia[]) => {
  try {
    const response = await fetch("http://localhost:3000/api/updateStatus",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(actionTransferencia)
      }
    );
    console.log(JSON.stringify(actionTransferencia));
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