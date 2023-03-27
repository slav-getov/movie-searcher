import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider as Router,
} from "react-router-dom";
import App from "./App";
import Favourites from "./routes/favourites/Favourites";
import Watchlist from "./routes/watchlist/Watchlist";
import Form from "./components/forms/Form";
import { Provider } from "react-redux";
import { store } from "./store/store";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Form /> },
      {
        path: "/watchlist",
        element: <Watchlist />,
      },
      {
        path: "/favourites",
        element: <Favourites />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router router={router} />
    </Provider>
  </React.StrictMode>
);
