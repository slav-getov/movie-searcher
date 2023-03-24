import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import GlobalStyleProvider from "./components/GlobalStyleProvider";
import Header from "./components/header/Header";
import Form from "./components/forms/Form";
import { useGetMovieByTitleQuery } from "./services/movie";
const App = () => {
  const { data, error, isLoading } = useGetMovieByTitleQuery({
    title: "inception",
    apikey: "6f309716",
  });
  // const getData = async () => {
  //   try {
  //     const rawData = await axios.get(baseReqUrlNoParams, {
  //       params: {
  //         t: "inception",
  //         apikey: "6f309716",
  //       },
  //     });
  //     console.log(rawData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  //const [data, setData] = useState({});

  // useEffect(() => {
  //   //getData();
  // }, []);
  return (
    <>
      <GlobalStyleProvider />
      <Header title="Search and save your movies." />
      <Form />
      {console.log(data)}
      <Outlet />
    </>
  );
};

export default App;
