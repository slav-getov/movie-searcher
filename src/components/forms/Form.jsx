import React, { useState } from "react";
import ActionableButton from "../shared/ActionableButton";
import { FieldsetStyles } from "./form.style.css";
import { useSelector, useDispatch } from "react-redux";
import {
  updateFormSearchParams,
  nullFormSearchParams,
} from "../slices/formSlice";
import { useGetMovieByTitleQuery } from "../../services/movie";
import MovieElement from "../movie/Movie";
const Form = () => {
  const dispatch = useDispatch();

  //adding
  const [skip, setSkip] = useState(true);
  const value = useSelector((state) => state.form.value);
  const { data, isFetching, isSuccess, isError } = useGetMovieByTitleQuery(
    {
      title: value,
    },
    { skip }
  );
  let content;
  // is loading is only for first, is fetching is for first and subsequent
  if (isFetching) {
    content = <p>Data is currently loading...</p>;
  } else if (isSuccess) {
    content = <MovieElement title={data.Title} writer={data.Writer} />;
  } else if (isError) {
    content = <p>There was an error with your request</p>;
  }
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(updateFormSearchParams(e.target.search.value));
          setSkip((prev) => !prev);

          console.log("you submitted");
        }}
      >
        <FieldsetStyles>
          <label>
            Try searching for your favourite movies.
            <input
              type="text"
              name="search"
              onChange={(e) => console.log(e.target.value)}
            />
          </label>
        </FieldsetStyles>

        <ActionableButton title="Search" backgroundColor={"blue"} />
      </form>
      {content}
    </>
  );
};

export default Form;
