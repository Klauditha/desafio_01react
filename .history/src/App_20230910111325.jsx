import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./App.css";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Header nombre="Adopta un perrito" />
        <Container fluid>
          <Row>
            <Col>
              {" "}
              <Card
                nombre="Bartolo"
                direccionimagen="https://picsum.photos/200/300"
                texto="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogra amoroso que se merece."
                colorfondo="success"
                textotag="Husky"
              />
            </Col>
            <Col>
              <Card
                nombre="Messi"
                direccionimagen="https://picsum.photos/200/300"
                texto="Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!"
                colorfondo="primary"
                textotag="Bobtail"
              />
            </Col>
            <Col>
              <Card
                nombre="Gohan"
                direccionimagen="https://picsum.photos/200/300"
                texto="Un perro de tamaño mediano con un corazón gigante. ¡Hazte amigo de Gohan y experimenta un amor incondicional!"
                colorfondo="danger"
                textotag="Shar Pei"
              />
            </Col>
            <Col>
              <Card
                nombre="Princesa"
                direccionimagen="https://picsum.photos/200/300"
                texto="Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!"
                colorfondo="warning"
                textotag="Beagle"
              />
            </Col>
          </Row>
        </Container>

        <Footer footerTexto="Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su esencia única. Adopta un perro y bríndale una segunda oportunidad. Encuentra a tu compañero peludo para siempre." />
      </div>
    </>
  );
}

export default App;
