import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

/* import { ModalDetalle } from './components/pages/ModalDetalle'
 */
/* import { ModalAprobacion } from './components/pages/ModalAprobacion'
 */import { ModalDetalle } from './components/pages/ModalDetalle'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*  <ModalDetalle /> */}
    <ModalDetalle />
    {/*   <ModalAprobacion /> */}
  </StrictMode>,
)
