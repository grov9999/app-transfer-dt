import './App.css'
import { TransferManager } from './components/TransferManager'
import { TransferSearch } from './components/TransferSearch'

function App() {

  return (
    <>
       <h1 className="text-2xl font-bold text-center">Gestor Parte Transferencia DT</h1>
       <div>  
          <TransferSearch />
          <TransferManager />
       </div>
    </>
  )
}

export default App
