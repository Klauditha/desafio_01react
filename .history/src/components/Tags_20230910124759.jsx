import Badge from "react-bootstrap/Badge";

/* eslint-disable react/prop-types */
const Tags = ({ colorfondo, tagTexto }) => {
  return (
    <h5>
      <Badge pill bg={colorfondo}>{tagTexto}</Badge>
    </h5>
  );
};

export default Tags;
