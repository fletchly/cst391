import {createBrowserRouter} from "react-router-dom";
import App from "./app/App.tsx";
import {NoteList} from "./app/note-list/NoteList.tsx";
import {Login} from "./app/login/Login.tsx";
import {NoteDisplay} from "./app/note-display/NoteDisplay.tsx";

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
                path: '/note/:noteId',
                Component: NoteDisplay,
            },
        ]
    },
]);

export default routes