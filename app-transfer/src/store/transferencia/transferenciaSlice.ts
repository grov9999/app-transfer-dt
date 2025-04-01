import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IListDetalleTransferencia } from "../../interfaces/IListDetalleTransferencia";

export interface transferenciaInitialState {
  transferencias: IListDetalleTransferencia[];
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
      action: PayloadAction<IListDetalleTransferencia[]>
    ) => {
      state.transferencias = action.payload;
      state.loadingTransferencia = false;
      state.errorMessageTransferencia = null;
    },
    onAddTransfer: (
      state: transferenciaInitialState,
      action: PayloadAction<IListDetalleTransferencia>
    ) => {
      state.transferencias = [...state.transferencias, action.payload];
      state.loadingTransferencia = false;
      state.errorMessageTransferencia = null;
    },
  },
});

export const { onStartTransfLoading, onListingTransfer, onAddTransfer } =
  transferenciaSlice.actions;
