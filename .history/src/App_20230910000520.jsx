import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';
import Header from './components/Header';


import "./App.css";

function App() {
  return (
    <>
      <Header nombre="Adopta un perrito" />
      <Card
        nombre="Bartolo"
        direccionimagen="https://picsum.photos/200/300"
        texto="Lleno de energía y listo para jugar."
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
    </>
  );
}

export default App;
