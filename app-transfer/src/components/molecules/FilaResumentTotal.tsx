type IPropsFilaResumentTotal = {
  total: number;
};
const FilaResumentTotal = ({ total }: IPropsFilaResumentTotal) => {
  return (
    <>
      <div className="flex justify-between font-semibold bg-gray-50 px-5 py-3 border-t border-t-gray-300">
        <span className="w-1/2 text-sm">Total:</span>
        <span className="w-1/2 text-sm">S/. {total}</span>
      </div>
    </>
  );
};

export default FilaResumentTotal;
