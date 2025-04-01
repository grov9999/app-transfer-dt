import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup
  .object({
    almacen_origen_id: yup
      .string()
      .required("El almacén de origen es requerido"),
    almacen_destino_id: yup
      .string()
      .required("El almacén de destino es requerido"),
    centro_costo: yup.string().required("El centro de costo es requerido"),
    observaciones: yup.string(),
    monto_total: yup.string().required("El monto total es requerido"),
  })
  .required();

export const useTransferForm = () => {
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
    reset,
  };
};
