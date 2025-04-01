import { configureStore } from "@reduxjs/toolkit";
import { transferenciaSlice } from "./transferencia/TransferenciaSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { detalleTransferenciaSlice } from "./detalleTransferencia/detalleTransferenciaSlice";
import { almacenSlice } from "./almacenes/almacenSlice";
import { usuarioSlice } from "./usuario/usuarioSlice";

export const transferStore = configureStore({
  reducer: {
    transferencia: transferenciaSlice.reducer,
    detalleTransferencia: detalleTransferenciaSlice.reducer,
    almacenes: almacenSlice.reducer,
    usuario: usuarioSlice.reducer,
  },
});

export type RootState = ReturnType<typeof transferStore.getState>;
export type AppDispatch = typeof transferStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
