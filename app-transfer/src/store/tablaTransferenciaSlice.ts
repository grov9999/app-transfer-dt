import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IListDetalleTransferencia } from "../interfaces/IListDetalleTransferencia";

interface TransferState {
  filtrotransfer: IListDetalleTransferencia[];
  filtroCodigo: string;
}

const initialState: TransferState = {
  filtrotransfer: [],
  filtroCodigo: "",
};

export const tablaTransferenciaSlice = createSlice({
  name: "filtrotransfer",
  initialState,
  reducers: {
    setFiltroCodigo: (state, action: PayloadAction<string>) => {
      state.filtroCodigo = action.payload; // Actualizar el código de filtro
    },
  },
});

export const { setFiltroCodigo } = tablaTransferenciaSlice.actions;
export default tablaTransferenciaSlice.reducer;
