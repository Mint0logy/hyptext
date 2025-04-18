import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css'
import Landing from './pages/Landing.jsx'

const Router = createBrowserRouter([
  {path:"/", element: <Landing/>},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {Router}/>
  </StrictMode>,
)
