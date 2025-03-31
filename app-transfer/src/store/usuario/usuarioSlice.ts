import { createSlice } from "@reduxjs/toolkit";
interface IUsuario {
  id: number;
  nombre: string;
  correo: string;
  password: string;
}
const initialState: { usuario: IUsuario } = {
  usuario: {
    id: 1,
    nombre: "Juan Pérez",
    correo: "juan.perez@example.com",
    password: "password123",
  },
};
export const usuarioSlice = createSlice({
  name: "usuario",
  initialState,
  reducers: {
    getUsuario: (state) => {
      state.usuario;
    },
  },
});

export const { getUsuario } = usuarioSlice.actions;

export default usuarioSlice.reducer;
