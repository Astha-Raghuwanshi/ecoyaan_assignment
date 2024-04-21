
import React from 'react';
import './Button.css';
import { useState } from "react";

import { useNavigate} from 'react-router-dom';
const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];
const SIZES = ['btn--medium', 'btn--large'];

const Button = ({
  children,
  buttonStyle,
  buttonSize,

}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const navigate = useNavigate();

  return (

    <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={()=>navigate("/about")} >
        {children}
      </button>
  );
};

export default Button;
