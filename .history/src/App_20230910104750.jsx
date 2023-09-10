import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';
import Header from './components/Header';


import "./App.css";
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header nombre="Adopta un perrito" />
      <div className='container-fluid'></div>
      <Card
        nombre="Bartolo"
        direccionimagen="https://picsum.photos/200/300"
        texto="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogra amoroso que se merece."
        colorfondo="primary"
        textotag="Husky"
      />
      <Card
        nombre="Messi"
        direccionimagen="https://picsum.photos/200/300"
        texto="Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!"
        colorfondo="ff0053"
        textotag="Husky"
      />
       <Card
        nombre="Bartolo"
        direccionimagen="https://picsum.photos/200/300"
        texto="secondary"
        colorfondo="secondary"
        textotag="Husky"
      />
       <Card
        nombre="Bartolo"
        direccionimagen="https://picsum.photos/200/300"
        texto="secondary"
        colorfondo="red"
        textotag="Husky"
      />
      <Footer/>
    </>
  );
}

export default App;
