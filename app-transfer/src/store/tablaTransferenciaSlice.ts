import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IListDetalleTransferencia } from "../interfaces/IListDetalleTransferencia";

export interface TransferState {
  filtroTransferencia: IListDetalleTransferencia[];
  // filtroCodigo: string;
  // fechaInicio: string;
  // fechaFin: string;
}

const initialStateFilter: TransferState = {
  filtroTransferencia: [],
  // filtroCodigo: "",
  // fechaInicio: "",
  // fechaFin: "",
};

export const tablaTransferenciaSlice = createSlice({
  name: "filtroTransferencia",
  initialState: initialStateFilter,
  reducers: {
     onUpdateTransferTem: (
          state: TransferState,
          action: PayloadAction<IListDetalleTransferencia[]>
        ) => {
          state.filtroTransferencia = state.filtroTransferencia.map((transferencia) => {
            const updatedTransfer = action.payload.find(
              (item) => item.resultado_pt_id === transferencia.resultado_pt_id
            );
            return updatedTransfer
              ? { ...transferencia, ...updatedTransfer }
              : transferencia;
          });
        },

    setFiltroCodigo: (
      state: TransferState,
      action: PayloadAction<IListDetalleTransferencia[]>
    ) => {
      state.filtroTransferencia = action.payload;
    },
  },
});

export const {
  onUpdateTransferTem,
  setFiltroCodigo
} = tablaTransferenciaSlice.actions;
export default tablaTransferenciaSlice.reducer;
