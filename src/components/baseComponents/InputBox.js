import React from "react";
import "../../styles/VideoComponent.css"

const InputBox = (...props) => {
  
    const onChange=(event)=>{
        props[0].onChange(event);
    }

    const onKeyPress=()=>{
          props[0].onKeyPress();
    }

    return(
        <div className="">
                <input
                    autoFocus={props[0].autofocus === true ? true : false}
                    name={props[0].name}
                    className={"Input_Box1"}
                    type={props[0].type}
                    placeholder={props[0].placeholder}
                    onChange={onChange}
                    value={props[0].defaultValue}
                    disabled={props[0].disabled}
                    maxLength={props[0].maxLength}
                    keyPress={onKeyPress}
        />
        </div>
    )
}

export default InputBox;