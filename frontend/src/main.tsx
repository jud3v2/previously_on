import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Layout from "./component/Layout.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={Layout(Login)} />
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
