import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IListDetalleTransferencia } from "../../interfaces/IListDetalleTransferencia";

export interface transferenciaInitialState {
  transferencias: IListDetalleTransferencia[];
  loadingTransferencia: boolean;
  errorMessageTransferencia?: string | null;
  selectedTransfers: IListDetalleTransferencia[];
}
const initialStateTrans: transferenciaInitialState = {
  transferencias: [],
  loadingTransferencia: false,
  errorMessageTransferencia: null,
  selectedTransfers: [],
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
    onUpdateTransfer: (
      state: transferenciaInitialState,
      action: PayloadAction<IListDetalleTransferencia[]>
    ) => {
      state.transferencias = state.transferencias.map((transferencia) => {
        const updatedTransfer = action.payload.find(
          (item) => item.resultado_pt_id === transferencia.resultado_pt_id
        );
        return updatedTransfer
          ? { ...transferencia, ...updatedTransfer }
          : transferencia;
      });
    },
    toggleSelectTransfer: (
      state,
      action: PayloadAction<IListDetalleTransferencia>
    ) => {
      const selectedItem = action.payload;
      const index = state.selectedTransfers.findIndex(
        (transfer) => transfer.resultado_pt_id === selectedItem.resultado_pt_id
      );

      if (index === -1) {
        state.selectedTransfers.push(selectedItem);
      } else {
        state.selectedTransfers.splice(index, 1);
      }
    },
    onDeleteTranfer: (
      state: transferenciaInitialState,
      action: PayloadAction<IListDetalleTransferencia>
    ) => {
      state.transferencias = state.transferencias.filter(
        (trans) => trans.resultado_pt_id !== action.payload.resultado_pt_id // Aquí eliminamos el ítem cuyo pt_id coincida con el proporcionado
      );
    },
    onDeleteDeTranfer: (
      state: transferenciaInitialState,
      action: PayloadAction<IListDetalleTransferencia>
    ) => {
      state.selectedTransfers = state.selectedTransfers.filter(
        (trans) => trans.resultado_pt_id !== action.payload.resultado_pt_id // Aquí eliminamos el ítem cuyo pt_id coincida con el proporcionado
      );
    },
    onDeleteDeArregloTranfer: (
      state: transferenciaInitialState,
      action: PayloadAction<IListDetalleTransferencia[]>
    ) => {
      action.payload.forEach((item) => {
        state.selectedTransfers = state.selectedTransfers.filter(
          (trans) => trans.resultado_pt_id !== item.resultado_pt_id
        );
      });
    },

    onUpdateArregloTransferencia: (
      state: transferenciaInitialState,
      action: PayloadAction<IListDetalleTransferencia>
    ) => {
      const index = state.selectedTransfers.findIndex(
        (transa) => transa.resultado_pt_id === action.payload.resultado_pt_id
      );
      if (index !== -1) {
        state.selectedTransfers[index] = action.payload;
      } else {
        state.selectedTransfers.push(action.payload);
      }
    },
  },
});

export const {
  onStartTransfLoading,
  onListingTransfer,
  onAddTransfer,
  onUpdateTransfer,
  toggleSelectTransfer,
  onDeleteTranfer,
  onDeleteDeTranfer,
  onDeleteDeArregloTranfer,
  onUpdateArregloTransferencia,
} = transferenciaSlice.actions;
