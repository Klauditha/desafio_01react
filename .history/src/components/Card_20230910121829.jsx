import  Tags  from "./Tags";
import CardB from "react-bootstrap/Card";

/* eslint-disable react/prop-types */
const Card = ({ direccionimagen, nombre, texto, colorfondo, tagTexto }) => {
  return (
    <>
      <CardB style={{ width: "25rem" }}>
        <CardB.Img variant="top" src={direccionimagen} />
        <CardB.Body className="justify-content-center">
          <CardB.Title >{nombre}</CardB.Title>
          <CardB.Text>{texto}</CardB.Text>
          <Tags colorfondo={colorfondo} tagTexto={tagTexto}></Tags>
        </CardB.Body>
      </CardB>
    </>
  );
};

export default Card;
