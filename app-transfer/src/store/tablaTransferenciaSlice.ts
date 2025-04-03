import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IListDetalleTransferencia } from "../interfaces/IListDetalleTransferencia";

export interface TransferState {
  filtroTransferencia: IListDetalleTransferencia[];
  // filtroCodigo: string;
  // fechaInicio: string;
  // fechaFin: string;
}

const initialStateFilter: TransferState = {
  filtroTransferencia: []
  // filtroCodigo: "",
  // fechaInicio: "",
  // fechaFin: "",
};

export const tablaTransferenciaSlice = createSlice({
  name: "filtroTransferencia",
  initialState: initialStateFilter,
  reducers: {
    setFiltroCodigo: (
      state: TransferState,
      action: PayloadAction<IListDetalleTransferencia[]>
    ) => {
      state.filtroTransferencia = action.payload;
    },
    setFiltroEstado: (
      state: TransferState,
      action: PayloadAction<IListDetalleTransferencia[]>
    ) => {
      state.filtroTransferencia = action.payload;
    },
    setFiltroMonto: (
      state: TransferState,
      action: PayloadAction<IListDetalleTransferencia[]>
    ) => {
      state.filtroTransferencia = action.payload;
    },
    setFiltroCosto: (
      state: TransferState,
      action: PayloadAction<IListDetalleTransferencia[]>
    ) => {
      state.filtroTransferencia = action.payload;
    },
    setFiltroFecha: (
      state: TransferState,
      action: PayloadAction<IListDetalleTransferencia[]>
    ) => {
      state.filtroTransferencia = action.payload;
    },
  },
});

export const {
  setFiltroCodigo,
  setFiltroEstado,
  setFiltroMonto,
  setFiltroCosto,
  setFiltroFecha,
} = tablaTransferenciaSlice.actions;
export default tablaTransferenciaSlice.reducer;
