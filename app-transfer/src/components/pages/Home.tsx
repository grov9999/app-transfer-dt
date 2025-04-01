import { TransferManager } from "../TransferManager";
import { TransferSearch } from "../TransferSearch";

const Home = () => {
  return <div className="container mx-auto">
    <TransferSearch />
    <TransferManager />
  </div>;
};

export default Home;
