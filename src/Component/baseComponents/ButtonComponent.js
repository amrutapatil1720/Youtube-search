import React from 'react';
import { Button } from "react-bootstrap";
import "../../Style/Videocomponent.css"

const ButtonComponent = ({ BtnClick, ButtonText }) => {
  const handleClick = () => {
    BtnClick();
  }

  return (
    <div className="Input_Box">
      <Button variant="primary" onClick={handleClick}>{ButtonText}</Button>
    </div>
  );
}

export default ButtonComponent;
