import React from "react";
import { UlStyles, LiStyles, WatchlistContainer } from "./watchlist.style.css";
import ActionableButton from "../../components/shared/ActionableButton";
import MovieElement from "../../components/movie/Movie";
import { useSelector } from "react-redux";
const Watchlist = () => {
  const watchlistItems = useSelector((state) => state.watchlist.value);
  return (
    <div>
      {watchlistItems.map((singleItem) => (
        <MovieElement key={singleItem.id} title={singleItem.title}>
          <ActionableButton title="Submit me" />
        </MovieElement>
      ))}
    </div>
  );
};

export default Watchlist;
