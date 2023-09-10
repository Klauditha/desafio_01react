import Badge from "react-bootstrap/Badge";

/* eslint-disable react/prop-types */
const Tags = ({ colorfondo, tagTexto }) => {
  return <h6><Badge variant={colorfondo}>{tagTexto}</Badge></h6>;
};

export default Tags;
