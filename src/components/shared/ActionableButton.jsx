import React from "react";
import { ButtonStyles } from "./actionablebutton.style.css";
const ActionableButton = ({ title, backgroundColor, onClick, optionalRef }) => {
  return (
    <ButtonStyles
      backgroundColor={backgroundColor}
      onClick={onClick}
      optionalRef={optionalRef}
    >
      {title}
    </ButtonStyles>
  );
};

export default ActionableButton;
