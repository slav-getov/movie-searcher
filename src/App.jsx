import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import GlobalStyleProvider from "./components/GlobalStyleProvider";
import Header from "./components/header/Header";
import Form from "./components/forms/Form";
import { useGetMovieByTitleQuery } from "./services/movie";
const App = () => {
  const { data, error, isLoading } = useGetMovieByTitleQuery({
    title: "",
  });

  return (
    <>
      <GlobalStyleProvider />
      <Header title="Search and save your movies." />
      {/* <Form />
      {console.log(data.Response)} */}
      <Outlet />
    </>
  );
};

export default App;
