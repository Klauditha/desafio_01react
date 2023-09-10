import CardB from "react-bootstrap/Card";

/* eslint-disable react/prop-types */
export const Card = (props) => {
  return (
    <>
      <CardB style={{ width: "18rem" }}>
        <CardB.Img variant="top" src={props.direccionImagen} />
        <CardB.Body>
          <CardB.Title>{props.nombre}</CardB.Title>
          <CardB.Text>{props.texto}</CardB.Text>
        </CardB.Body>
      </CardB>
    </>
  );
};
