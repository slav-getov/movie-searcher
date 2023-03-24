import { Outlet } from "react-router-dom";
import GlobalStyleProvider from "./components/GlobalStyleProvider";
import Header from "./components/header/Header";
import { useSelector } from "react-redux";
import { useGetMovieByTitleQuery } from "./services/movie";
import MovieElement from "./components/movie/Movie";
const App = () => {
  const value = useSelector((state) => state.form.value);
  console.log("final value is " + value);
  const { data, error, isLoading } = useGetMovieByTitleQuery({
    title: value,
  });

  return (
    <>
      <GlobalStyleProvider />
      <Header title="Search and save your movies." />
      {console.log(data)}
      {isLoading ? (
        <p>Data is currently loading...</p>
      ) : (
        <MovieElement props={data} />
      )}
      <Outlet />
    </>
  );
};

export default App;
