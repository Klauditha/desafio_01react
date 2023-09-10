import  Tags  from "./Tags";
import Card from "react-bootstrap/Card";

/* eslint-disable react/prop-types */
const MyCard = ({ direccionImagen, nombre, texto, colorFondo, tagTexto }) => {
  return (
    <>
      <Card className="text-center" style={{ width: "20rem" }}>
        <Card.Img variant="top" src={direccionImagen} />
        <Card.Body>
          <Card.Title >{nombre}</Card.Title>
          <Card.Text>{texto}</Card.Text>
          <Tags colorFondo={colorFondo} tagTexto={tagTexto}></Tags>
        </Card.Body>
      </Card>
    </>
  );
};

export default MyCard;
