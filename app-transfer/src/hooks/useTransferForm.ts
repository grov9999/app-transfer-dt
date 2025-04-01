import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import toast from "react-hot-toast";

const schema = yup
  .object({
    almacen_origen_id: yup
      .string()
      .required("El almacen de origen es requerido"),
    almacen_destino_id: yup
      .string()
      .required("El almacen de destino es requerido"),
    centro_costo: yup.string().required("El centro de costo es requerido"),
    monto_total: yup
      .number()
      .typeError("El monto debe ser un número")
      .positive("El monto debe ser positivo")
      .required("El monto total es requerido"),
    usuario_creador_id: yup.number().required("El usuario es requerido"),
  })
  .required();

export const useTransferForm = () => {
  const notify = (message: string) => toast(message);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  return {
    register,
    handleSubmit,
    formState: { errors },
    notify,
    reset,
  };
};
