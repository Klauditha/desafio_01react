import { Card } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header nombre="Adopta un perrito" />
      <Card
        nombre="Bartolo"
        direccionImagen="https://pixabay.com/es/photos/perro-mascota-fornido-cachorro-7691238/"
        texto=""
        colorFondo=""
      ></Card>
    </>
  );
}

export default App;
