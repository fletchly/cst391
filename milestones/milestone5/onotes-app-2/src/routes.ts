import { createBrowserRouter } from "react-router-dom";
import App from "./app/App.tsx";
import { NoteList } from "./app/note-list/NoteList.tsx";
import { Login } from "./app/login/Login.tsx";
import { NoteDisplay } from "./app/note-display/NoteDisplay.tsx";
import { getAllNotes, getNote } from "./service/NoteService.ts";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        loader: async () => {
          return { notes: await getAllNotes() };
        },
        Component: NoteList,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/note/new",
        loader: () => {
          return { modify: false, note_: {} };
        },
        Component: NoteDisplay,
      },
      {
        path: "/note/:noteId",
        loader: async ({ params }) => {
          return { modify: true, note_: await getNote(params.noteId!) };
        },
        Component: NoteDisplay,
      },
    ],
  },
]);

export default routes;
