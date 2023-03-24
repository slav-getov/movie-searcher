import React from "react";
import ActionableButton from "../shared/ActionableButton";
const MovieElement = ({ title, writer, poster, plot }) => {
  return (
    <div>
      <p>{title}</p>
      <div>
        <img src={poster} alt={plot} />
      </div>
      <p>Written by {writer}</p>
      <ActionableButton title="Add to Watchlist" backgroundColor={"blue"} />
      <ActionableButton title="Add to Favourites" backgroundColor={"blue"} />
    </div>
  );
};

export default MovieElement;
