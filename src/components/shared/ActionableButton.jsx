import React from "react";
import { ButtonStyles } from "./actionablebutton.style.css";
const ActionableButton = ({ title, backgroundColor, onClick }) => {
  return (
    <ButtonStyles backgroundColor={backgroundColor} onClick={onClick}>
      {title}
    </ButtonStyles>
  );
};

export default ActionableButton;
