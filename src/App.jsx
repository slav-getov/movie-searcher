import { useState, useEffect } from "react";
import axios from "axios";
import GlobalStyleProvider from "./components/GlobalStyleProvider";
const App = () => {
  const baseReqUrl = "https://www.omdbapi.com/?t=inception&apikey=6f309716";
  const baseReqUrlNoParams = "https://www.omdbapi.com/";
  const getData = async () => {
    try {
      const rawData = await axios.get(baseReqUrlNoParams, {
        params: {
          t: "inception",
          apikey: "6f309716",
        },
      });
      console.log(rawData);
    } catch (error) {
      console.log(error);
    }
  };
  const [data, setData] = useState({});

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <GlobalStyleProvider />
      Test
    </>
  );
};

export default App;
