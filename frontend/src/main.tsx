import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'
import Logout from './pages/Logout.tsx'
import Series from './pages/Series.tsx'
import Serie from './pages/Serie.tsx'
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
    if(localStorage.getItem('token')) {
        config.headers['X-BetaSeries-Token'] = localStorage.getItem('token');
    }
    config.baseURL = frontendConfig.betaSeriesApiUrl;
    return config;
})


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={Layout(Login, {footerException: false, protected: false})} />
              <Route path="/logout" element={Layout(Logout)} />
              <Route path="/series" element={Layout(Series, {protected: true})} />
              <Route path="/series/:id" element={Layout(Serie, {protected: true, footerException: true})} />
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
