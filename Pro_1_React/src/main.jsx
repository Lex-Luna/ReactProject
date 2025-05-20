
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Componente2 from './assets/Componente2'

import './index.css'
/* Importacion del componente App.jsx */
/* import App from './App.jsx' */
/* TODO aqui se hacen los importaciones de los componentes par mostrarlas */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    { <Componente2 /> }

  </StrictMode>,
)
