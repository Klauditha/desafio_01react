import 'bootstrap/dist/css/bootstrap.min.css';
import {Header,Card} from "./components"

import "./App.css";

function App() {
  return (
    <>
      <Header nombre="Adopta un perrito" />
      <Card
        nombre="Bartolo"
        direccionimagen="https://pixabay.com/es/photos/perro-mascota-fornido-cachorro-7691238/"
        texto="secondary"
        colorfondo=""
        textotag="Husky"
      />
      <Card
        nombre="Bartolo"
        direccionimagen="https://pixabay.com/es/photos/perro-mascota-fornido-cachorro-7691238/"
        texto="secondary"
        colorfondo=""
        textotag="Husky"
      />
    </>
  );
}

export default App;