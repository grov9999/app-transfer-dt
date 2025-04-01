import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DetalleTransferencia } from "../../interfaces/DetalleTransferencia";
import { IListDetalleTransferencia } from "../../interfaces/IListDetalleTransferencia";

export interface detalleTransferenciaInitialState {
    detalleTransferencia: IListDetalleTransferencia | null;
    listDetalleTransferencia: IListDetalleTransferencia[],
    loadingDeTransferencia: boolean;
    errorMessageDeTransferencia?: string | null;
}
const initialStateDetalleTrans: detalleTransferenciaInitialState = {
    detalleTransferencia: null,
    listDetalleTransferencia: [],
    loadingDeTransferencia: false,
    errorMessageDeTransferencia: null
}
export const detalleTransferenciaSlice = createSlice({
    name: 'openDetalleTransferencia',
    initialState: initialStateDetalleTrans,
    reducers: {
        onStartDetaTransfLoading: (state: detalleTransferenciaInitialState) => {
            state.loadingDeTransferencia = true;
            state.errorMessageDeTransferencia = null;
        },
        onListingDetaTransfer: (state: detalleTransferenciaInitialState, action: PayloadAction<IListDetalleTransferencia>) => {
            state.detalleTransferencia = action.payload;
            state.loadingDeTransferencia = false;
            state.errorMessageDeTransferencia = null;
        },
        onUpdateDetalleTransfer: (state, action: PayloadAction<IListDetalleTransferencia>) => {
            state.detalleTransferencia = action.payload; // Actualiza el estado con el nuevo detalle
        },
        onArregloDetaTransfer: (state: detalleTransferenciaInitialState, action: PayloadAction<IListDetalleTransferencia>) => {
            const index = state.listDetalleTransferencia.findIndex((trans) => trans.resultado_pt_id === action.payload.resultado_pt_id);
            if (index !== -1) {
                state.listDetalleTransferencia[index] = action.payload;
            } else {
                state.listDetalleTransferencia.push(action.payload);
            }

        }
    }
})

export const {
    onStartDetaTransfLoading,
    onListingDetaTransfer,
    onUpdateDetalleTransfer,
    onArregloDetaTransfer
} = detalleTransferenciaSlice.actions