import Badge from 'react-bootstrap/Badge';

/* eslint-disable react/prop-types */
export default Tags = (props) => {
  return (
    <>
    <h5><Badge bg={props.colorfondo}>{props.textotag}</Badge></h5>
    </>
  )
}

