import { createBrowserRouter } from "react-router-dom";
import App from "./app/App.tsx";
import { NoteList } from "./app/note-list/NoteList.tsx";
import { Login } from "./app/login/Login.tsx";
import { NoteDisplay } from "./app/note-display/NoteDisplay.tsx";
import { getAllNotes, getNote, searchNotes } from "./service/NoteService.ts";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        loader: async () => {
          return { search: false, notes: await getAllNotes() };
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
      {
        path: "/search/:keyword",
        loader: async ({ params }) => {
          return {
            search: true,
            notes: await searchNotes(params.keyword!),
          };
        },
        Component: NoteList,
      },
    ],
  },
]);

export default routes;
