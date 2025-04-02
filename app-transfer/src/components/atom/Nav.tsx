export const Nav = () => {
  return (
    <div>
      <div className="bg-[#0B5DB4] p-3 flex justify-between">
        <h2 className="text-white ">Registro de Parte de Transferencia</h2>
      </div>
      <nav className="border-b border-b-gray-200 mb-3 ">
        <div className=" p-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-90 hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-90 hover:underline">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-90 hover:underline">
                  Procesos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-90 hover:underline">
                  Usuarios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-90 hover:underline text-[#3666C2] font-bold"
                >
                  Partes de Transferncia
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-90 hover:underline">
                  Reportes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-90 hover:underline">
                  Configuracion
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
