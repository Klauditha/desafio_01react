import Tag from "./Tags"; 
import CardB from "react-bootstrap/Card";


/* eslint-disable react/prop-types */
const Card = ({direccionimagen,nombre , texto, colorfondo, textotag}) => {
  return (
    <>
      <CardB style={{ width: "18rem" }}>
        <CardB.Img variant="top" src={direccionimagen} />
        <CardB.Body>
          <CardB.Title>{nombre}</CardB.Title>
          <CardB.Text>{texto}</CardB.Text>
        </CardB.Body>
        <Tag colorfondo={colorfondo} textoTag={textotag}></Tag>
      </CardB>
    </>
  );
};

export default Card;
