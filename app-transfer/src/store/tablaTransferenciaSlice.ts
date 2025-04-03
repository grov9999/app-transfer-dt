import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IListDetalleTransferencia } from "../interfaces/IListDetalleTransferencia";

export interface TransferState {
  filtroTransferencia: IListDetalleTransferencia[];
}

const initialStateFilter: TransferState = {
  filtroTransferencia: [],
};

export const tablaTransferenciaSlice = createSlice({
  name: "filtroTransferencia",
  initialState: initialStateFilter,
  reducers: {
    onUpdateTransferTem: (
      state: TransferState,
      action: PayloadAction<IListDetalleTransferencia[]>
    ) => {
      state.filtroTransferencia = state.filtroTransferencia.map(
        (transferencia) => {
          const updatedTransfer = action.payload.find(
            (item) => item.resultado_pt_id === transferencia.resultado_pt_id
          );
          return updatedTransfer
            ? { ...transferencia, ...updatedTransfer }
            : transferencia;
        }
      );
    },

    setFiltroCodigo: (
      state: TransferState,
      action: PayloadAction<IListDetalleTransferencia[]>
    ) => {
      state.filtroTransferencia = action.payload;
    },
    onDeleteTranferTem: (
      state: TransferState,
      action: PayloadAction<IListDetalleTransferencia>
    ) => {
      state.filtroTransferencia = state.filtroTransferencia.filter(
        (trans) => trans.resultado_pt_id !== action.payload.resultado_pt_id // Aquí eliminamos el ítem cuyo pt_id coincida con el proporcionado
      );
    },
  },
});

export const { onUpdateTransferTem, setFiltroCodigo, onDeleteTranferTem } =
  tablaTransferenciaSlice.actions;
export default tablaTransferenciaSlice.reducer;
