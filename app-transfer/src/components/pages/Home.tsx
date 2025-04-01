import { Nav } from "../atom/Nav";
import { TransferManager } from "../organismo/TransferManager";
import { TransferSearch } from "../organismo/TransferSearch";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Nav />
      <TransferSearch />
      <TransferManager />
    </div>
  );
};

export default Home;
