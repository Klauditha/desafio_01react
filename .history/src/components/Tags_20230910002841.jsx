import Badge from "react-bootstrap/Badge";

/* eslint-disable react/prop-types */
const Tags = ({ colorfondo, tagTexto }) => {
  return <h4><Badge variant={colorfondo}>{tagTexto}</Badge></h4>;
};

export default Tags;
