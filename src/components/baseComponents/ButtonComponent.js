import React from 'react';
import { Button } from "react-bootstrap";
import "../../styles/VideoComponent.css"
function ButtonComponent(props) {
  const handleClick = () => {
    props.btnClick();
  }
  return (
    <div className="Input_Box">
      <Button variant="primary" className='btnColor' onClick={handleClick}>{props.ButtonText}</Button>
    </div>
  );
}
export default ButtonComponent;
