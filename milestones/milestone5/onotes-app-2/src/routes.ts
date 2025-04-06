import {createBrowserRouter} from "react-router-dom";
import App from "./app/App.tsx";
import {NoteList} from "./app/note-list/NoteList.tsx";
import {Login} from "./app/Login/Login.tsx";
import {Test} from "./app/Test/Test.tsx";

const routes = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                path: '/',
                Component: NoteList,
            },
            {
                path: '/login',
                Component: Login,
            },
            {
                path: '/test',
                Component: Test,
            }
        ]
    },
]);

export default routes