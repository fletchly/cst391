import './App.css'
import {BrowserRouter, Route, Routes} from "react-router";
import NoteList from "./components/NoteList/NoteList.tsx";


function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<NoteList />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
