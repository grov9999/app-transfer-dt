const CreateTransfer = () => {
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
          <form action="" className="w-full">
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
                    htmlFor="usuario"
                    className="block mb-2 text-sm font-medium text-gray-900 w-1/2"
                  >
                    Usuario Creador:
                  </label>
                  <input
                    type="text"
                    id="usuario"
                    disabled
                    className="shadow-xs bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Autegenerado"
                    required
                  />
                </div>
                <div className="mb-5 flex">
                  <label
                    htmlFor="monto"
                    className="block mb-2 text-sm font-medium text-gray-900 w-1/2"
                  >
                    Monto Total:
                  </label>
                  <input
                    type="text"
                    id="monto"
                    className="shadow-xs  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder=""
                    required
                  />
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
                    required
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
                    className="shadow-xs  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder=""
                    required
                  />
                </div>
              </div>
              <div className="w-1/2 ">
                <div className="border-b-1 border-b-gray-200 mb-5">
                  <h3>Informacion de Transferencia</h3>
                </div>
                <div className="mb-5 flex">
                  <label
                    htmlFor="origen"
                    className="block mb-2 text-sm font-medium text-gray-900 w-1/2"
                  >
                    Almacen origen:
                  </label>
                  <input
                    type="text"
                    id="origen"
                    className="shadow-xs  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder=""
                    required
                  />
                </div>
                <div className="mb-5 flex">
                  <label
                    htmlFor="destino"
                    className="block mb-2 text-sm font-medium text-gray-900 w-1/2"
                  >
                    Almacen Destino:
                  </label>
                  <input
                    type="text"
                    id="destino"
                    className="shadow-xs  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder=""
                    required
                  />
                </div>
                <div className="mb-5 flex">
                  <label
                    htmlFor="costo"
                    className="block mb-2 text-sm font-medium text-gray-900 w-1/2"
                  >
                    Centro de Costo:
                  </label>
                  <input
                    type="text"
                    id="costo"
                    className="shadow-xs  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder=""
                    required
                  />
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
                    required
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
                    required
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
                    required
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
              <div>
                <input
                  type="submit"
                  id="cancelar"
                  value={"Cancelar"}
                  className="bg-red-500 text-white p-3 rounded-sm"
                />
              </div>
              <input
                type="submit"
                id="previa"
                value={"Vista Previa"}
                className="bg-gray-100 text-black p-3 rounded-sm border border-gray-400"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTransfer;
