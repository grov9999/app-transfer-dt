import { UseFormRegisterReturn } from "react-hook-form";
import { IAlmacen } from "../../interfaces/IAlmacen";

type PropsFormField = {
  disabled: boolean;
  id: string;
  color?: boolean;
  texto: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
  errors?: string;
  select?: boolean;
  items?: IAlmacen[];
};
const FormField = ({
  disabled,
  texto,
  color,
  id,
  placeholder,
  register,
  errors,
}: PropsFormField) => {
  return (
    <>
      <div className="mb-5 flex">
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-900 w-1/2"
        >
          {texto}
        </label>

        <div className="w-full">
          <input
            type="text"
            id={id}
            disabled={disabled}
            className={`shadow-xs ${
              disabled ? "bg-gray-100" : ""
            } border border-gray-300 text-gray-900 ${
              color ? "text-yellow-700" : ""
            } text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
            placeholder={placeholder}
            {...register}
          />
          {errors && <p className="text-red-500 text-xs">{errors}</p>}
        </div>
      </div>
    </>
  );
};

export default FormField;
