import Badge from "react-bootstrap/Badge";

/* eslint-disable react/prop-types */
const Tags = ({ colorfondo, textotag }) => {
  return <Badge {colorfondo}>{textotag}</Badge>;
};

export default Tags;
