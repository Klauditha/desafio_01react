import Badge from "react-bootstrap/Badge";

/* eslint-disable react/prop-types */
const Tag = (props) => {
  return (
    <h5>
      <Badge bg={props.colorfondo}>{props.textotag}</Badge>
    </h5>
  );
};

export default Tag;