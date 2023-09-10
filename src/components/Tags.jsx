import Badge from "react-bootstrap/Badge";

/* eslint-disable react/prop-types */
const Tags = ({ colorFondo, tagTexto }) => {
  return (
    <h5>
      <Badge pill bg={colorFondo}>
        {tagTexto}
      </Badge>
    </h5>
  );
};

export default Tags;
