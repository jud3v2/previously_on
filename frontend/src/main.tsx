import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'
import Logout from './pages/Logout.tsx'
import Series from './pages/Series.tsx'
import Serie from './pages/Serie.tsx'
import Profile from './pages/Profile.tsx'
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
import Episode from "./pages/Episode.tsx";
import dayjs from "dayjs";
import 'dayjs/locale/fr';
dayjs.locale('fr');
axios.interceptors.request.use(config => {
    config.headers['X-BetaSeries-Key'] = frontendConfig.betaSeriesApiKey;
    if(localStorage.getItem('token')) {
        config.headers['X-BetaSeries-Token'] = localStorage.getItem('token');
    }
    config.baseURL = frontendConfig.betaSeriesApiUrl;
    return config;
})

const AppLayout = (Component: any, props: any) => {
    return (
        <Layout Component={Component} props={props} />
    );
};

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={AppLayout(Login, { footerException: false, protected: false })} />
                <Route path="/logout" element={AppLayout(Logout,{protected: false})} />
                <Route path="/series" element={AppLayout(Series, { protected: true })} />
                <Route path="/series/:id" element={AppLayout(Serie, { protected: true, footerException: true })} />
                <Route path="/episode/:id" element={AppLayout(Episode, { protected: true, footerException: true })} />
                <Route path="/profile" element={AppLayout(Profile, { protected: true, footerException: true })} />
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
            transition="Bounce"
            stacked={true}
        />
    </StrictMode>,
);
