import Tag from "./Tags"; 
import CardB from "react-bootstrap/Card";


/* eslint-disable react/prop-types */
const Card = ({direccionimagen,nombre }) => {
  return (
    <>
      <CardB style={{ width: "18rem" }}>
        <CardB.Img variant="top" src={direccionimagen} />
        <CardB.Body>
          <CardB.Title>{nombre}</CardB.Title>
          <CardB.Text>{props.texto}</CardB.Text>
        </CardB.Body>
        <Tag colorfondo={props.colorfondo} textoTag={props.textotag}></Tag>
      </CardB>
    </>
  );
};

export default Card;
