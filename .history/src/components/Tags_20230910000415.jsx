import Badge from "react-bootstrap/Badge";

/* eslint-disable react/prop-types */
class Tag extends Component = ({ colorfondo, textotag }) => {
  return <Badge bg={colorfondo}>{textotag}</Badge>;
};

export default Tag;
