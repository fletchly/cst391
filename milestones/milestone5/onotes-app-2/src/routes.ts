import {createBrowserRouter} from "react-router-dom";
import App from "./app/App.tsx";

const routes = createBrowserRouter([
    {
        path: '/',
        Component: App,
    },
]);

export default routes