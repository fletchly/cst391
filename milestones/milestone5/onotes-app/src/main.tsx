import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from "./components/Navbar/Navbar.tsx";


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Navbar />
        <div className={"pt-5"}>
            <App/>
        </div>
    </StrictMode>,
)
