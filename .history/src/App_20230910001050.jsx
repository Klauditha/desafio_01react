import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';
import Header from './components/Header';


import "./App.css";
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header nombre="Adopta un perrito" />
      <Card
        nombre="Bartolo"
        direccionimagen="https://picsum.photos/200/300"
        texto="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogra amoroso que se merece."
        colorfondo="#ff0055"
        textotag="Husky"
      />
      <Card
        nombre="Bartolo"
        direccionimagen="https://picsum.photos/200/300"
        texto="secondary"
        colorfondo="secondary"
        textotag="Husky"
      />
      <Footer/>
    </>
  );
}

export default App;
