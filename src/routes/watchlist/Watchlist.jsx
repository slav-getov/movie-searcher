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
      {watchlistItems.length > 0 ? (
        watchlistItems.map((singleItem) => (
          <MovieElement key={singleItem.id} title={singleItem.title}>
            <ActionableButton
              title="Remove"
              backgroundColor="red"
              onClick={() => dispatch(removeWatchlistItem(singleItem.id))}
            />
          </MovieElement>
        ))
      ) : (
        <p>No items in your watchlist. Add some.</p>
      )}
    </div>
  );
};

export default Watchlist;
