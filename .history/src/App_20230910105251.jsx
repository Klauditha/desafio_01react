import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";
import Header from "./components/Header";

import "./App.css";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Header nombre="Adopta un perrito" />
        <Card
          nombre="Bartolo"
          direccionimagen="https://picsum.photos/200/300"
          texto="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogra amoroso que se merece."
          colorfondo="success"
          textotag="Husky"
        />
        <Card
          nombre="Messi"
          direccionimagen="https://picsum.photos/200/300"
          texto="Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!"
          colorfondo="primary"
          textotag="Bobtail"
        />
        <Card
          nombre="Gohan"
          direccionimagen="https://picsum.photos/200/300"
          texto="Un perro de tamaño mediano con un corazón gigante. ¡Hazte amigo de Gohan y experimenta un amor incondicional!"
          colorfondo="danger"
          textotag="Shar Pei"
        />
        <Card
          nombre="Bartolo"
          direccionimagen="https://picsum.photos/200/300"
          texto="secondary"
          colorfondo="red"
          textotag="Husky"
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
