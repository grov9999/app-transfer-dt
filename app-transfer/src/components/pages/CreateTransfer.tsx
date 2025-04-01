import { useEffect } from "react";
import {
  createTransferencia,
  getAlmacenes,
} from "../../lib/fetchTransferencia";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/TransferenciaRedux";
import { allAlmacenes } from "../../store/almacenes/almacenSlice";
import { getUsuario } from "../../store/usuario/usuarioSlice";
import toast from "react-hot-toast";
import { useTransferForm } from "../../hooks/useTransferForm";
import FormField from "../molecules/FormField";

import { CardTexArea } from "../molecules/CardTexArea";
import FormSelect from "../molecules/FormSelect";
import { useNavigate } from "react-router-dom";

const CreateTransfer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { almacenes } = useSelector((state: RootState) => state.almacenes);
  const { usuario } = useSelector((state: RootState) => state.usuario);

  useEffect(() => {
    const fetchAlmacenes = async () => {
      const response = await getAlmacenes();
      if (response.ok && response.data) {
        dispatch(allAlmacenes(response.data));
      }
    };
    dispatch(getUsuario());
    fetchAlmacenes();
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useTransferForm();

  const onSubmit = async (data: any) => {
    console.log(data);

    data.usuario_creador_id = usuario.id;
    const response = await createTransferencia(data);
    if (response.ok) {
      toast.success("Transferencia creada con éxito!");
      reset();
    } else {
      toast.error("Error al enviar la transferencia!");
    }
  };
  const handleHome = () => {
    navigate("/");
  };
  return (
    <div className="mx-auto container my-10">
      <div className="flex justify-between mb-3">
        <div>
          <h1 className="font-bold ">Registro parte Transferencia</h1>
        </div>
        <div>
          <button
            onClick={handleHome}
            className="bg-gray-100 text-xs text-black p-1 rounded-sm border border-gray-400 cursor-pointer"
          >
            ← Volver al listado
          </button>
        </div>
      </div>
      <div>
        <div className="bg-[#0B5DB4] p-3">
          <h2 className="text-white ">Registro de Parte de Transferencia</h2>
        </div>
        <div className=" w-full p-3 border border-gray-300">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="w-[90%] flex gap-x-10">
              <div className="w-1/2  ">
                <div className="border-b-1 border-b-gray-200 mb-5">
                  <h3>Informacion General</h3>
                </div>
                <FormField
                  disabled={true}
                  texto="id"
                  placeholder="Autogenerado"
                  id="id"
                />

                <FormField
                  disabled={true}
                  texto="Fecha de Generacion:"
                  placeholder="Autogenerado"
                  id="fecha"
                />

                <FormField
                  disabled={true}
                  texto="Estado Actual:"
                  placeholder="Pendiente"
                  color={true}
                  id="estado"
                />

                <FormField
                  disabled={true}
                  texto="Usuario Creador:"
                  placeholder={`${
                    usuario.nombre
                      ? usuario.nombre
                      : "Error, Intentelo mas tarde"
                  }`}
                  id="usuario_creador_id"
                />

                <FormField
                  disabled={false}
                  texto=" Monto Total:"
                  placeholder=""
                  id="monto_total"
                  register={register("monto_total")}
                  errors={errors.monto_total?.message}
                />

                <FormField
                  disabled={true}
                  texto="Moneda:"
                  placeholder="PEN"
                  id="moneda"
                />

                <FormField
                  disabled={true}
                  texto="Referencia SAP:"
                  placeholder="-"
                  id="sap"
                />
              </div>
              <div className="w-1/2 ">
                <div className="border-b-1 border-b-gray-200 mb-5">
                  <h3>Informacion de Transferencia</h3>
                </div>
                <FormSelect
                  texto="Almacen origen:"
                  placeholder=""
                  items={almacenes}
                  register={register("almacen_origen_id")}
                  errors={errors.almacen_origen_id?.message}
                />

                <FormSelect
                  texto="Almacen Destino:"
                  placeholder=""
                  items={almacenes}
                  register={register("almacen_destino_id")}
                  errors={errors.almacen_destino_id?.message}
                />

                <FormField
                  disabled={false}
                  texto="Centro de Costo:"
                  placeholder=""
                  id="centro_costo"
                  register={register("centro_costo")}
                  errors={errors.centro_costo?.message}
                />

                <FormField
                  disabled={true}
                  texto="Usuario aprobador:"
                  placeholder="-"
                  id="aprobador"
                />

                <FormField
                  disabled={true}
                  texto="Fecha de Aprobacion:"
                  placeholder="-"
                  id="aprobacion"
                />

                <FormField
                  disabled={true}
                  texto="Motivo de rechazo:"
                  placeholder="-"
                  id="rechazo"
                />
              </div>
            </div>
            <CardTexArea
              isDisable={false}
              label="Observaciones"
              tipo="observaciones"
              padding={false}
              register={register("observaciones")}
            />
            <CardTexArea
              isDisable={true}
              label="Log de Integración"
              tipo="log"
              padding={false}
            />

            <div className="flex justify-center gap-x-3 mt-5">
              <div>
                <input
                  type="submit"
                  id="guardar"
                  value={"Guardar"}
                  className="bg-[#0B5DB4] text-white p-3 rounded-sm cursor-pointer"
                />
              </div>
              <div>
                <button
                  id="cancelar"
                  className="bg-red-500 text-white p-3 rounded-sm cursor-pointer"
                  onClick={handleHome}
                >
                  Cancelar
                </button>
              </div>
              {/* <button
                id="previa"
                className="bg-gray-100 text-black p-3 rounded-sm border border-gray-400"
              >
                Vista Previa
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTransfer;
