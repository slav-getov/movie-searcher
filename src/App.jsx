import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import GlobalStyleProvider from "./components/GlobalStyleProvider";
import Header from "./components/header/Header";
import Form from "./components/forms/Form";
const App = () => {
  const baseReqUrl = "https://www.omdbapi.com/?t=inception&apikey=6f309716";
  const baseReqUrlNoParams = "https://www.omdbapi.com/";

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
  const [data, setData] = useState({});

  useEffect(() => {
    //getData();
  }, []);
  return (
    <>
      <GlobalStyleProvider />
      <Header title="Search and save your movies." />
      <Form />
      <Outlet />
    </>
  );
};

export default App;
