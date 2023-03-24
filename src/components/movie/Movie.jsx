import React, { useRef } from "react";
import ActionableButton from "../shared/ActionableButton";
import { useDispatch } from "react-redux";
import { addWatchlistitem } from "../slices/watchlistSlice";
const MovieElement = ({ title, writer, poster, plot, isComplex, id }) => {
  const myTitleRef = useRef(null);
  const dispatch = useDispatch();
  return (
    <div>
      <p ref={myTitleRef}>{title}</p>
      {isComplex ? (
        <>
          <div>
            <img src={poster} alt={plot} />
          </div>
          <p>Written by {writer}</p>
          <ActionableButton
            title="Add to Watchlist"
            backgroundColor={"blue"}
            onClick={() => {
              //console.log("hey");
              console.log(myTitleRef.current.textContent);
              dispatch(
                addWatchlistitem({
                  id: id,
                  title: myTitleRef.current.textContent,
                })
              );
            }}
          />
          <ActionableButton
            title="Add to Favourites"
            backgroundColor={"blue"}
          />
        </>
      ) : (
        <>
          <p>{title}</p>
          <ActionableButton title="Remove Item" backgroundColor={"blue"} />
        </>
      )}
    </div>
  );
};

export default MovieElement;
