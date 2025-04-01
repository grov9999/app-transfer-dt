import { Nav } from "../atom/Nav";
import { TransferManager } from "../TransferManager";
import { TransferSearch } from "../TransferSearch";

const Home = () => {
  return <div className="container mx-auto">
    <Nav />
    <TransferSearch />
    <TransferManager />
  </div>;
};

export default Home;
