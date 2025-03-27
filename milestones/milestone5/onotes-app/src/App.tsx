import './App.css'
import {BrowserRouter, Route, Routes} from "react-router";
import NoteList from "./components/NoteList/NoteList.tsx";
import NoteDisplay from "./components/NoteDisplay/NoteDisplay.tsx";


function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<NoteList />} />
              <Route path={"/notes/new"} element={<NoteDisplay modify={false} />} />
              <Route path={"/notes/:noteId"} element={<NoteDisplay modify={true} />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
