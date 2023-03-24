import React from "react";
import { useSelector } from "react-redux";
const Watchlist = () => {
  const watchlistItems = useSelector((state) => state.watchlist.value);
  return <div>This is the Watchlist{console.log(watchlistItems)}</div>;
};

export default Watchlist;
