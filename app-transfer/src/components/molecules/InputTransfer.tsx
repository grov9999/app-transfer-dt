interface InputProps {
  id: string;
  max?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label: string;
  type?: string;
}

export const InputTransfer = ({
  id,
  max,
  value,
  onChange,
  placeholder,
  label,
  type = "text",
}: InputProps) => (
  <div>
    <label
      htmlFor={id}
      className="block mb-2 text-sm font-medium text-gray-900"
    >
      {label}
    </label>
    <input
      type={type}
      id={id}
      max={max}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    />
  </div>
);
