import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IListDetalleTransferencia } from "../../interfaces/IListDetalleTransferencia";

export interface detalleTransferenciaInitialState {
  detalleTransferencia: IListDetalleTransferencia | null;
  listDetalleTransferencia: IListDetalleTransferencia[];
  loadingDeTransferencia: boolean;
  errorMessageDeTransferencia?: string | null;
}
const initialStateDetalleTrans: detalleTransferenciaInitialState = {
  detalleTransferencia: null,
  listDetalleTransferencia: [],
  loadingDeTransferencia: false,
  errorMessageDeTransferencia: null,
};
export const detalleTransferenciaSlice = createSlice({
  name: "openDetalleTransferencia",
  initialState: initialStateDetalleTrans,
  reducers: {
    onStartDetaTransfLoading: (state: detalleTransferenciaInitialState) => {
      state.loadingDeTransferencia = true;
      state.errorMessageDeTransferencia = null;
    },
    onListingDetaTransfer: (
      state: detalleTransferenciaInitialState,
      action: PayloadAction<IListDetalleTransferencia>
    ) => {
      state.detalleTransferencia = action.payload;
      state.loadingDeTransferencia = false;
      state.errorMessageDeTransferencia = null;
    },
    onUpdateDetalleTransfer: (
      state,
      action: PayloadAction<IListDetalleTransferencia>
    ) => {
      state.detalleTransferencia = action.payload; // Actualiza el estado con el nuevo detalle
    },
  },
});

export const {
  onStartDetaTransfLoading,
  onListingDetaTransfer,
  onUpdateDetalleTransfer,
} = detalleTransferenciaSlice.actions;
