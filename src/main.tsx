import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './main.css'
import Header from './componentes/header/Header'
import Footer from './componentes/footer/Footer'
import Main from './componentes/main/Main'

import {createBrowserRouter,RouterProvider,} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <>
    <Header/>
    <Main/>
    <Footer/>
    </>,
  },
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/imagenes",
    element: <div>Página de Imagenes</div>,
  },
  {
    path: "/sobre",
    element: <div>Página Sobre</div>,
  },
  {
    path: "/contacto",
    element: <div>Página de Contato</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)