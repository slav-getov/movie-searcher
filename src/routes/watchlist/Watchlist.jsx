import React from "react";
import { UlStyles, LiStyles, WatchlistContainer } from "./watchlist.style.css";
import ActionableButton from "../../components/shared/ActionableButton";
import MovieElement from "../../components/movie/Movie";
import { useSelector, useDispatch } from "react-redux";
import { removeWatchlistItem } from "../../components/slices/watchlistSlice";
const Watchlist = () => {
  const watchlistItems = useSelector((state) => state.watchlist.value);
  const dispatch = useDispatch();
  console.log(watchlistItems);
  return (
    <div>
      {watchlistItems.map((singleItem) => (
        <MovieElement key={singleItem.id} title={singleItem.title}>
          <ActionableButton
            title="Remove"
            backgroundColor="red"
            onClick={() => dispatch(removeWatchlistItem(singleItem.id))}
          />
        </MovieElement>
      ))}
    </div>
  );
};

export default Watchlist;
