import React from "react";
import { ButtonStyles } from "./actionablebutton.style.css";
const ActionableButton = ({ title, backgroundColor }) => {
  return <ButtonStyles backgroundColor={backgroundColor}>{title}</ButtonStyles>;
};

export default ActionableButton;
