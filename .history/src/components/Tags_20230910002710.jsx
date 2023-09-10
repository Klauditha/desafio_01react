import Badge from "react-bootstrap/Badge";

/* eslint-disable react/prop-types */
const Tags = ({ colorfondo, textotag }) => {
  return <h1>{textotag}<Badge variant={colorfondo}>{textotag}</Badge></h1>;
};

export default Tags;
