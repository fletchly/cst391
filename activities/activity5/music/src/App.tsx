import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Card from "./Card.tsx";

function App() {
  return (
      <>
          <h1>Music I like</h1>
          <Card
              albumTitle={"Abbey Road"}
              albumDescription={"The Beatles' 11th studio album"}
              imageUrl={"https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg"}
              buttonText={"Listen"}
          />
          <Card
              albumTitle={"Yellow Submarine"}
              albumDescription={"The Beatles' 10th studio album"}
              imageUrl={"https://upload.wikimedia.org/wikipedia/en/a/ac/TheBeatles-YellowSubmarinealbumcover.jpg"}
              buttonText={"Listen"}
          />
          <Card
              albumTitle={"Sgt. Pepper's Lonely Hearts Club Band"}
              albumDescription={"The Beatles' 8th studio album"}
              imageUrl={"https://upload.wikimedia.org/wikipedia/en/5/50/Sgt._Pepper%27s_Lonely_Hearts_Club_Band.jpg"}
              buttonText={"Listen"}
          />
      </>
  )
}

export default App
