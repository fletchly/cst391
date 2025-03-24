import './App.css'
import Counter from "./Counter.tsx";

function App() {
  return (
    <>
      This is the first page of the app.
      <Counter title={'Counter 1'} />
      <Counter title={'Counter 2'} />
      <Counter title={'Counter 3'} />
    </>
  )
}

export default App
