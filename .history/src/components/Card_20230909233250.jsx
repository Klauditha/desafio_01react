import CardB from "react-bootstrap/Card";
import Tags from 'Tags'

/* eslint-disable react/prop-types */
export const Card = (props) => {
  return (
    <>
      <CardB style={{ width: "18rem" }}>
        <CardB.Img variant="top" src={props.direccionimagen} />
        <CardB.Body>
          <CardB.Title>{props.nombre}</CardB.Title>
          <CardB.Text>{props.texto}</CardB.Text>
        </CardB.Body>
        <Tags colorfondo={props.colorfondo} textoTag={props.textotag}></Tags>
      </CardB>
    </>
  );
};
