import { HashRouter, Route, Routes } from "react-router-dom";

import CreateTransfer from "./components/pages/CreateTransfer";
import { ModalDetalle } from "./components/pages/ModalDetalle";
import ModalRechazo from "./components/pages/ModalRechazo";
import Home from "./components/pages/Home";
function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/create" element={<CreateTransfer />} />
          <Route path="/modal" element={<ModalDetalle />} />
          <Route path="/modal-rechazo" element={<ModalRechazo />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
