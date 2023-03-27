import { Outlet } from "react-router-dom";
import GlobalStyleProvider from "./components/GlobalStyleProvider";
import Header from "./components/header/Header";

const App = () => {
  return (
    <>
      <GlobalStyleProvider />
      <Header title="Search and save your movies." />
      <Outlet />
    </>
  );
};

export default App;
