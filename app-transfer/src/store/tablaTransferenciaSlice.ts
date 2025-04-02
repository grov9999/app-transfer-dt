import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITablaTransferencia } from "../interfaces/ITablaTransferencia";

interface ITablaTransferencias {
    data : ITablaTransferencia[];
    filter: string;
    loading: boolean;
    error: string | null;
}


const initialState: ITablaTransferencias = {
    data: [],
    filter: '',
    loading: false,
    error: null,
};

export const fetchTablaTransferencias = createAsyncThunk(
    'table/fetchTablaTransferencias',
    async (_, thunkAPI) => {
        try {
            const response = await fetch('http://localhost:3000/api/transfers');
            const result = await response.json();
            return result.data as ITablaTransferencia[];
        } catch (error) {
            return thunkAPI.rejectWithValue('Error al cargar transferencias');
        }
    }
)

export const tablaTransferenciaSlice = createSlice({
    name: 'tabla',
    initialState,
    reducers: {
        setFilter(state, action: PayloadAction<string>) {
            state.filter = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchTablaTransferencias.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchTablaTransferencias.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
          })
          .addCase(fetchTablaTransferencias.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
          });
      },
})

export const {setFilter} = tablaTransferenciaSlice.actions;
export default tablaTransferenciaSlice.reducer;