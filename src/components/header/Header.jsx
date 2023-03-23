import React from "react";
import { HeaderStyles } from "./header.style.css";
import Navigation from "../navigation/Navigation";

const Header = ({ title, onClick }) => {
  return (
    <HeaderStyles>
      <h1>{title}</h1>
      <Navigation />
    </HeaderStyles>
  );
};

export default Header;
