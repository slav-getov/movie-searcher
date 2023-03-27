import React from "react";
import {
  NavStyles,
  UlStyles,
  LiStyles,
  LinkStyle,
} from "./navigation.style.css";

const Navigation = () => {
  return (
    <NavStyles>
      <UlStyles>
        <LiStyles>
          <LinkStyle to={"/watchlist"}>Watchlist</LinkStyle>
        </LiStyles>
        <LiStyles>
          <LinkStyle to={"/favourites"}>Favourites</LinkStyle>
        </LiStyles>
      </UlStyles>
    </NavStyles>
  );
};

export default Navigation;
