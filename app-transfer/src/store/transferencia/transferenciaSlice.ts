import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITransfer } from "../../interfaces/ITransferCreate";

export interface transferenciaInitialState {
  transferencias: ITransfer[];
  loadingTransferencia: boolean;
  errorMessageTransferencia?: string | null;
}
const initialStateTrans: transferenciaInitialState = {
  transferencias: [],
  loadingTransferencia: false,
  errorMessageTransferencia: null,
};
export const transferenciaSlice = createSlice({
  name: "opeTransferencia",
  initialState: initialStateTrans,
  reducers: {
    onStartTransfLoading: (state: transferenciaInitialState) => {
      state.loadingTransferencia = true;
      state.errorMessageTransferencia = null;
    },
    onListingTransfer: (
      state: transferenciaInitialState,
      action: PayloadAction<ITransfer[]>
    ) => {
      state.transferencias = action.payload;
      state.loadingTransferencia = false;
      state.errorMessageTransferencia = null;
    },
    onAddTransfer: (
      state: transferenciaInitialState,
      action: PayloadAction<ITransfer>
    ) => {
      state.transferencias = [...state.transferencias, action.payload];
      state.loadingTransferencia = false;
      state.errorMessageTransferencia = null;
    },
  },
});

export const { onStartTransfLoading, onListingTransfer, onAddTransfer } =
  transferenciaSlice.actions;
