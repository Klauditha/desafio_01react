import Badge from "react-bootstrap/Badge";

/* eslint-disable react/prop-types */
const Tag = ({colorfondo,textotag}) => {
  return (
    <h5>
      <Badge bg={colorfondo}>{textotag}</Badge>
    </h5>
  );
};

export default Tag;