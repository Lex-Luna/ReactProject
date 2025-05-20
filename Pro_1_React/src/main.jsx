
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ContadorApp } from './assets/ContadorApp.jsx'
/* import Componente2 from './assets/Componentes/Componente2.jsx' */

import App from './App.jsx' 

import './index.css'
/* Importacion del componente App.jsx */
/* TODO aqui se hacen los importaciones de los componentes par mostrarlas */
/* <Componente2   titulo="esta seccion es de props" /> */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContadorApp />
  </StrictMode>,
)
