import  Tags  from "./Tags";
import CardB from "react-bootstrap/Card";

/* eslint-disable react/prop-types */
const Card = ({ direccionimagen, nombre, texto, colorfondo, textotag }) => {
  return (
    <>
      <CardB style={{ width: "100 rem" }}>
        <CardB.Img variant="top" src={direccionimagen} />
        <CardB.Body>
          <CardB.Title>{nombre}</CardB.Title>
          <CardB.Text>{texto}</CardB.Text>
          <Tags colorfondo={colorfondo} tagTexto={textotag}></Tags>
        </CardB.Body>
      </CardB>
    </>
  );
};

export default Card;
