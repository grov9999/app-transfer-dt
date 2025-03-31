import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

/* import { ModalDetalle } from './components/pages/ModalDetalle'
 */
/* import { ModalAprobacion } from './components/pages/ModalAprobacion'
 */
import { ModalDetalle } from './components/pages/ModalDetalle'
import { transferStore } from './store/TransferenciaRedux'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={transferStore}>
      {/*  <ModalDetalle /> */}
      <ModalDetalle />
      {/*   <ModalAprobacion /> */}
    </Provider>
  </StrictMode>,
)
