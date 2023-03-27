import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { movieApi } from "../services/movie";
import formReducer from "../components/slices/formSlice.js";
import watchlistReducer from "../components/slices/watchlistSlice.js";
export const store = configureStore({
  reducer: {
    form: formReducer,
    watchlist: watchlistReducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

setupListeners(store.dispatch);
