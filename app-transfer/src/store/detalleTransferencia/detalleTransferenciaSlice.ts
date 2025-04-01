import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DetalleTransferencia } from "../../interfaces/DetalleTransferencia";

export interface detalleTransferenciaInitialState {
    detalleTransferencia: DetalleTransferencia | null;
    loadingDeTransferencia: boolean;
    errorMessageDeTransferencia?: string | null;
}
const initialStateDetalleTrans: detalleTransferenciaInitialState = {
    detalleTransferencia: null,
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
        onListingDetaTransfer: (state: detalleTransferenciaInitialState, action: PayloadAction<DetalleTransferencia>) => {
            state.detalleTransferencia = action.payload;
            state.loadingDeTransferencia = false;
            state.errorMessageDeTransferencia = null;
        },

        onUpdateDetalleTransfer: (state, action: PayloadAction<DetalleTransferencia>) => {
            state.detalleTransferencia = action.payload; // Actualiza el estado con el nuevo detalle
        },
    }
})

export const {
    onStartDetaTransfLoading,
    onListingDetaTransfer,
    onUpdateDetalleTransfer
} = detalleTransferenciaSlice.actions