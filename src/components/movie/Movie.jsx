import React from "react";
import ActionableButton from "../shared/ActionableButton";
const MovieElement = ({ title, Writer }) => {
  return (
    <div>
      <p>{title}</p>
      <p>Written by {Writer}</p>
      <ActionableButton title="Add to Watchlist" />
      <ActionableButton title="Add to Favourites" />
    </div>
  );
};

export default MovieElement;
