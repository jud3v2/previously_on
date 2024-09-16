import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import axios from "axios";
import Layout from "./component/Layout.tsx";
import {frontendConfig} from "./config";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

axios.interceptors.request.use(config => {
    config.headers['X-BetaSeries-Key'] = frontendConfig.betaSeriesApiKey;
    config.baseURL = frontendConfig.betaSeriesApiUrl;
    return config;
})


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={Layout(Login)} />
          </Routes>
      </BrowserRouter>
      <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition: Bounce
          stacked={true}
      />
  </StrictMode>,
)
