import React from "react";
import ActionableButton from "../shared/ActionableButton";
const MovieElement = ({ title, writer }) => {
  return (
    <div>
      <p>{title}</p>
      <p>Written by {writer}</p>
      <ActionableButton title="Add to Watchlist" />
      <ActionableButton title="Add to Favourites" />
    </div>
  );
};

export default MovieElement;
