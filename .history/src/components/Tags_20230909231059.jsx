import Badge from 'react-bootstrap/Badge';

/* eslint-disable react/prop-types */
export const Tags = (props) => {
  return (
    <>
    <div>{props.texto}</div>
    <div>{props.colorFondo}</div>
    </>
  )
}
