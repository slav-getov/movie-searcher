import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: [],
};

export const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addWatchlistitem: (state, action) => {
      console.log(action.payload);
      state.value = [...state.value, action.payload];
    },
    removeWatchlistItem: (state, action) => {
      state.value = state.value.filter(
        (singleWatchlistItem) => singleWatchlistItem.id != action.payload
      );
    },
  },
});

export const { addWatchlistitem, removeWatchlistItem } = watchlistSlice.actions;

export default watchlistSlice.reducer;
