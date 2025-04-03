import { HashRouter, Route, Routes } from "react-router-dom";
import CreateTransfer from "./components/pages/CreateTransfer";
import Home from "./components/pages/Home";
function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/create" element={<CreateTransfer />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
