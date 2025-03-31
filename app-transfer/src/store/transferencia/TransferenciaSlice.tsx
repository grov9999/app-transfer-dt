import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Transferencia } from "../../interfaces/Transferencia";

export interface transferenciaInitialState {
    transferencia: Transferencia[];
    loadingTransferencia: boolean;
    errorMessageTransferencia?: string | null;
}
const initialStateTrans: transferenciaInitialState = {
    transferencia: [],
    loadingTransferencia: false,
    errorMessageTransferencia: null
}
export const transferenciaSlice = createSlice({
    name: 'opeTransferencia',
    initialState: initialStateTrans,
    reducers: {
        onStartTransfLoading: (state: transferenciaInitialState) => {
            state.loadingTransferencia = true;
            state.errorMessageTransferencia = null;
        },
        onListingTransfer: (state: transferenciaInitialState, action: PayloadAction<Transferencia[]>) => {
            state.transferencia = action.payload;
            state.loadingTransferencia = false;
            state.errorMessageTransferencia = null;
        }

    }
})

export const {
    onStartTransfLoading,
    onListingTransfer
} = transferenciaSlice.actions