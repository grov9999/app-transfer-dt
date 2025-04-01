import { UseFormRegisterReturn } from "react-hook-form";
import { IAlmacen } from "../../interfaces/IAlmacen";

type PropsFormField = {
  texto: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
  errors?: string;
  items?: IAlmacen[];
};
const FormSelect = ({ texto, register, errors, items }: PropsFormField) => {
  return (
    <>
      <div className="mb-5 flex">
        <label className="block mb-2 text-sm font-medium text-gray-900 w-1/2">
          {texto}
        </label>
        <div className="w-full">
          <select
            {...register}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            <option value="">Selecciona un almacen</option>
            {items ? (
              items.map((item) => (
                <option key={item.id} value={`${item.id}`}>
                  {item.nombre}
                </option>
              ))
            ) : (
              <option value="">Error,intentelo mas tarde</option>
            )}
          </select>
          {errors && <p className="text-red-500 text-xs">{errors}</p>}
        </div>
      </div>
    </>
  );
};

export default FormSelect;
