import { Tag } from "./Tags";
import CardB from "react-bootstrap/Card";
// eslint-disable-next-line no-unused-vars
import Badge from "react-bootstrap";

/* eslint-disable react/prop-types */
const Card = ({ direccionimagen, nombre, texto, colorfondo, textotag }) => {
  return (
    <>
      <CardB style={{ width: "18rem" }}>
        <CardB.Img variant="top" src={direccionimagen} />
        <CardB.Body>
          <CardB.Title>{nombre}</CardB.Title>
          <CardB.Text>{texto}</CardB.Text>
          <Tag colorfondo={colorfondo} textoTag={textotag}></Tag>
        </CardB.Body>
      </CardB>
    </>
  );
};

export default Card;
