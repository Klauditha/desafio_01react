import Badge from "react-bootstrap/Badge";

/* eslint-disable react/prop-types */
class Tag = ({ colorfondo, textotag }) => {
  return <Badge bg={colorfondo}>{textotag}</Badge>;
};

export default Tag;
