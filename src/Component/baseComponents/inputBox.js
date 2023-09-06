import React from 'react';
import { FormControl } from "react-bootstrap";
import "../../Style/Videocomponent.css"

const InputBoxComponent = ({
  onChange,
  onKeyPress,
  autofocus,
  name,
  hasError,
  type,
  placeholder,
  defaultValue,
  disabled,
  maxLength
}) => {
  return (
    <div className="Input_Box">
      <FormControl
        autoFocus={autofocus === true ? true : false}
        name={name}
        className={hasError === true ? "hasError" : ""}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={defaultValue}
        disabled={disabled}
        maxLength={maxLength}
        onKeyPress={onKeyPress}
      />
    </div>
  );
}

export default InputBoxComponent;
