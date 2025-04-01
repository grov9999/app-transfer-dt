import { X } from "lucide-react";
type HeaderModalProps = {
  texto: string;
  aprovado: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>,

};
export const HeaderModal = ({ texto, aprovado,setState }: HeaderModalProps) => {
  return (
    <div
      className={`relative ${
        aprovado ? "bg-blue-600" : "bg-red-600"
      } rounded px-5 py-3`}
    >
      <button className="absolute top-4 right-4 text-6xl text-white hover:text-black" onClick={()=>setState(false)}>
        <X size={20} strokeWidth={4} />
      </button>
      <h2 className="text-xl font-semibold text-white">{texto}</h2>
    </div>
  );
};
