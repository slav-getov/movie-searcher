import React from "react";
import { HeaderStyles } from "./header.style.css";
import Navigation from "../navigation/Navigation";
import { LinkStyle } from "../navigation/navigation.style.css";
const Header = ({ title, onClick }) => {
  return (
    <HeaderStyles>
      <LinkStyle to={"/"}>
        <h1>{title}</h1>
      </LinkStyle>
      <Navigation />
    </HeaderStyles>
  );
};

export default Header;
