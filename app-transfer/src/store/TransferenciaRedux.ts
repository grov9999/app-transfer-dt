import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { detalleTransferenciaSlice } from "./detalleTransferencia/detalleTransferenciaSlice";
import { almacenSlice } from "./almacenes/almacenSlice";
import { usuarioSlice } from "./usuario/usuarioSlice";
import { transferenciaSlice } from "./transferencia/transferenciaSlice";
import { tablaTransferenciaSlice } from "./tablaTransferenciaSlice";

export const transferStore = configureStore({
  reducer: {
    transferencias: transferenciaSlice.reducer,
    detalleTransferencia: detalleTransferenciaSlice.reducer,
    almacenes: almacenSlice.reducer,
    usuario: usuarioSlice.reducer,
    filtros: tablaTransferenciaSlice.reducer,
  },
});

export type RootState = ReturnType<typeof transferStore.getState>;
export type AppDispatch = typeof transferStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
