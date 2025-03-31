import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAlmacen } from "../../interfaces/IAlmacen";
interface IAlmacenes {
  almacenes: IAlmacen[];
}
const initialState: IAlmacenes = {
  almacenes: [],
};
export const almacenSlice = createSlice({
  name: "almacen",
  initialState,
  reducers: {
    allAlmacenes: (state, action: PayloadAction<IAlmacen[]>) => {
      state.almacenes = action.payload;
    },
  },
});

export const { allAlmacenes } = almacenSlice.actions;

export default almacenSlice.reducer;
