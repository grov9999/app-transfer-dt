import { useState } from "react";

export const useStateHooks = () => {
  const [openModalDetalle, setOpenModalDetalle] = useState(false);
  const [openModalAprobacion, setOpenModalAprobacion] = useState(false);
  const [openModalRechazar, setOpenModalRechazar] = useState(false);

  // Función para cerrar todos los modales
  const closeAllModals = () => {
    setOpenModalDetalle(false);
    setOpenModalAprobacion(false);
    setOpenModalRechazar(false);
  };

  return {
    openModalDetalle,
    setOpenModalDetalle,
    openModalAprobacion,
    setOpenModalAprobacion,
    openModalRechazar,
    setOpenModalRechazar,
    closeAllModals,
  };
};
