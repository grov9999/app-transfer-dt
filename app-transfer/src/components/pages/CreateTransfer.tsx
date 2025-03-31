import { useEffect } from "react";
import {
  createTransferencia,
  getAlmacenes,
} from "../../lib/fetchTransferencia";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/TransferenciaRedux";
import { allAlmacenes } from "../../store/almacenes/almacenSlice";
import { getUsuario } from "../../store/usuario/usuarioSlice";
import { useTransferForm } from "../../hooks/useTransferForm";
import { ITransfer } from "../../interfaces/ITransferCreate";

const CreateTransfer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    notify,
  } = useTransferForm();

  useEffect(() => {
    const almacenes = async () => {
      const rpt = await getAlmacenes();
      dispatch(allAlmacenes(rpt.data));
    };
    dispatch(getUsuario());
    almacenes();
  }, [dispatch]);
  const { almacenes } = useSelector((state: RootState) => state.almacenes);
  const { usuario } = useSelector((state: RootState) => state.usuario);

  const onSubmit = async (data: any) => {
    console.log("asdas");
    alert("dsa");

    // console.log(data);
    // data.usuario_creador_id = usuario.id;
    // const response = await createTransferencia(data);
    // if (response.ok) {
    //   notify("✅ Formulario enviado correctamente!!!");
    // } else {
    //   notify(`❌ ${response.message || "❌  Error al enviar!!"}`);
    // }
  };
  return (
    <div className="mx-auto container my-10">
      <div className="flex justify-between mb-3">
        <div>
          <h1 className="font-bold ">Registro parte Transferencia</h1>
        </div>
        <div>
          <button className="bg-gray-100 text-xs text-black p-1 rounded-sm border border-gray-400">
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
                <div className="mb-5 flex">
                  <label
                    htmlFor="id"
                    className="block mb-2 text-sm font-medium text-gray-900 w-1/2"
                  >
                    Id:
                  </label>
                  <input
                    type="text"
                    id="id"
                    disabled
                    className="shadow-xs bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Autegenerado"
                    required
                  />
                </div>
                <div className="mb-5 flex">
                  <label
                    htmlFor="fecha"
                    className="block mb-2 text-sm font-medium text-gray-900 w-1/2"
                  >
                    Fecha de Generacion:
                  </label>
                  <input
                    type="text"
                    id="fecha"
                    disabled
                    className="shadow-xs bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Autegenerado"
                    required
                  />
                </div>
                <div className="mb-5 flex">
                  <label
                    htmlFor="estado"
                    className="block mb-2 text-sm font-medium text-gray-900 w-1/2"
                  >
                    Estado Actual:
                  </label>
                  <input
                    type="text"
                    id="estado"
                    disabled
                    className="shadow-xs bg-gray-100 border border-gray-300 text-yellow-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Pendiente"
                    required
                  />
                </div>
                <div className="mb-5 flex">
                  <label
                    htmlFor="usuario_creador_id"
                    className="block mb-2 text-sm font-medium text-gray-900 w-1/2"
                  >
                    Usuario Creador:
                  </label>
                  <div className="w-full">
                    <input
                      type="text"
                      id="usuario_creador_id"
                      disabled
                      className="shadow-xs bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder={`${usuario.nombre}`}
                      // value={usuario.id}
                    />
                  </div>
                </div>
                <div className="mb-5 flex">
                  <label
                    htmlFor="monto_total"
                    className="block mb-2 text-sm font-medium text-gray-900 w-1/2"
                  >
                    Monto Total:
                  </label>
                  <div className="w-full">
                    <input
                      type="text"
                      id="monto_total"
                      className="shadow-xs  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder=""
                      {...register("monto_total")}
                    />
                    {errors.monto_total && (
                      <p className="text-red-500 text-xs">
                        {errors.monto_total?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-5 flex">
                  <label
                    htmlFor="moneda"
                    className="block mb-2 text-sm font-medium text-gray-900 w-1/2"
                  >
                    Moneda:
                  </label>
                  <input
                    type="text"
                    id="moneda"
                    disabled
                    className="shadow-xs bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="PEN"
                  />
                </div>
                <div className="mb-5 flex">
                  <label
                    htmlFor="sap"
                    className="block mb-2 text-sm font-medium text-gray-900 w-1/2"
                  >
                    Referencia SAP:
                  </label>
                  <input
                    type="text"
                    id="sap"
                    disabled
                    placeholder="-"
                    className="shadow-xs  bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  />
                </div>
              </div>
              <div className="w-1/2 ">
                <div className="border-b-1 border-b-gray-200 mb-5">
                  <h3>Informacion de Transferencia</h3>
                </div>
                <div className="mb-5 flex">
                  <label
                    htmlFor="almacen_origen_id"
                    className="block mb-2 text-sm font-medium text-gray-900 w-1/2"
                  >
                    Almacen origen:
                  </label>
                  <div className="w-full">
                    <select
                      id="almacen_origen_id"
                      {...register("almacen_origen_id")}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    >
                      <option value="">Selecciona un almacen</option>
                      {almacenes.map((item) => (
                        <option key={item.id} value={`${item.id}`}>
                          {item.nombre}
                        </option>
                      ))}
                    </select>
                    {errors.almacen_origen_id && (
                      <p className="text-red-500 text-xs">
                        {errors.almacen_origen_id?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-5 flex">
                  <label
                    htmlFor="almacen_destino_id"
                    className="block mb-2 text-sm font-medium text-gray-900 w-1/2"
                  >
                    Almacen Destino:
                  </label>
                  <div className="w-full">
                    <select
                      id="almacen_destino_id"
                      {...register("almacen_destino_id")}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    >
                      <option value="">Selecciona un almacen</option>
                      {almacenes.map((item) => (
                        <option key={item.id} value={`${item.id}`}>
                          {item.nombre}
                        </option>
                      ))}
                    </select>
                    {errors.almacen_destino_id && (
                      <p className="text-red-500 text-xs">
                        {errors.almacen_destino_id?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-5 flex">
                  <label
                    htmlFor="centro_costo"
                    className="block mb-2 text-sm font-medium text-gray-900 w-1/2"
                  >
                    Centro de Costo:
                  </label>
                  <div className="w-full">
                    <input
                      type="text"
                      id="centro_costo"
                      className="shadow-xs  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder=""
                      {...register("centro_costo")}
                    />
                    {errors.centro_costo && (
                      <p className="text-red-500 text-xs">
                        {errors.centro_costo?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-5 flex">
                  <label
                    htmlFor="aprobador"
                    className="block mb-2 text-sm font-medium text-gray-900 w-1/2"
                  >
                    Usuario aprobador:
                  </label>
                  <input
                    type="text"
                    id="aprobador"
                    disabled
                    className="shadow-xs bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="-"
                  />
                </div>
                <div className="mb-5 flex">
                  <label
                    htmlFor="aprobacion"
                    className="block mb-2 text-sm font-medium text-gray-900 w-1/2"
                  >
                    Fecha de Aprobacion:
                  </label>
                  <input
                    type="text"
                    id="aprobacion"
                    disabled
                    className="shadow-xs bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="-"
                  />
                </div>
                <div className="mb-5 flex">
                  <label
                    htmlFor="rechazo"
                    className="block mb-2 text-sm font-medium text-gray-900 w-1/2"
                  >
                    Motivo de rechazo:
                  </label>
                  <input
                    type="text"
                    id="rechazo"
                    disabled
                    className="shadow-xs bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="-"
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="my-2">Observaciones</h3>
              <textarea
                id="observaciones"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder=""
              ></textarea>
            </div>
            <div className="">
              <h3 className="my-2">Log de Integración</h3>
              <textarea
                id="log"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder=""
                disabled
              ></textarea>
            </div>
            <div className="flex justify-center gap-x-3 mt-5">
              <div>
                <input
                  type="submit"
                  id="guardar"
                  value={"Guardar"}
                  className="bg-[#0B5DB4] text-white p-3 rounded-sm"
                />
              </div>
              {/* <div>
                <button
                  id="cancelar"
                  className="bg-red-500 text-white p-3 rounded-sm"
                >
                  Cancelar
                </button>
              </div>
              <button
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
