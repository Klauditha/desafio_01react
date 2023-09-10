import Badge from "react-bootstrap/Badge";

/* eslint-disable react/prop-types */
const Tags = ({ colorfondo, tagTexto }) => {
  return <h1>{tagTexto}<Badge variant={colorfondo}>{tagTexto}</Badge></h1>;
};

export default Tags;
