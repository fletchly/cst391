import './App.css'
import {Outlet} from "react-router-dom";

function App() {
    return (
        <>
            <h1 className={"text-3xl font-bold"}>This is the app</h1>
            <Outlet />
        </>
    )
}

export default App
