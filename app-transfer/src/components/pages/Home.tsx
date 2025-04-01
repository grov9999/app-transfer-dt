import { Nav } from "../atom/Nav";
import { TransferManager } from "../TransferManager";
import { TransferSearch } from "../TransferSearch";

const Home = () => {
  return <div className="container mx-auto">
    {/* <div className="flex justify-between">
      <h1>Gestor de Transferencia</h1>
      <button>Aprobado</button>
    </div> */}
    <Nav />
    <TransferSearch />
    <TransferManager />
  </div>;
};

export default Home;
