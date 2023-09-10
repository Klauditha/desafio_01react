import Badge from "react-bootstrap";

/* eslint-disable react/prop-types */
const Tags = ({ colorfondo, textotag }) => {
  return <Badge bg={colorfondo}>{textotag}</Badge>;
};

export default Tags;
