import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IListDetalleTransferencia } from "../../interfaces/IListDetalleTransferencia";

export interface transferenciaInitialState {
  transferencias: IListDetalleTransferencia[];
  loadingTransferencia: boolean;
  errorMessageTransferencia?: string | null;
  selectedTransfers: IListDetalleTransferencia[];
  booleanSelect: boolean;
}
const initialStateTrans: transferenciaInitialState = {
  transferencias: [],
  loadingTransferencia: false,
  errorMessageTransferencia: null,
  selectedTransfers: [],
  booleanSelect: false,
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
    onAddListTransfer: (
      state: transferenciaInitialState,
      action: PayloadAction<IListDetalleTransferencia[]>
    ) => {
      state.selectedTransfers = action.payload; // Asigna transferencias
      state.booleanSelect = true;
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
      state.booleanSelect = false;
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
    onUpdateTransferenciaSimple: (
      state: transferenciaInitialState,
      action: PayloadAction<IListDetalleTransferencia>
    ) => {
      const index = state.transferencias.findIndex(
        (transa) => transa.resultado_pt_id === action.payload.resultado_pt_id
      );
      if (index !== -1) {
        state.transferencias[index] = action.payload;
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
  onAddListTransfer,
  onDeleteTranfer,
  onDeleteDeTranfer,
  onDeleteDeArregloTranfer,
  onUpdateArregloTransferencia,
  onUpdateTransferenciaSimple,
} = transferenciaSlice.actions;
