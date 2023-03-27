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
  const [formDataBeforeSubmit, setFormDataBeforeSubmit] = useState("");
  const value = useSelector((state) => state.form.value);
  const { data, isFetching, isSuccess, isError, error } =
    useGetMovieByTitleQuery(
      {
        title: value,
      },
      { skip }
    );

  let content;
  console.log(data, isError, error);
  // is loading is only for first, is fetching is for first and subsequent
  if (isFetching) {
    content = <p>Data is currently loading...</p>;
  } else if (isSuccess) {
    content = (
      <MovieElement
        title={data.Title}
        writer={data.Writer}
        poster={data.Poster}
        plot={data.Plot}
        id={data.imdbID}
        isComplex
      />
    );
  } else if (isError || error) {
    const { Error } = error.data;
    console.log(Error);
    content = <p>{Error}</p>;
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(updateFormSearchParams(formDataBeforeSubmit));
          setSkip(false);
        }}
      >
        <FieldsetStyles>
          <label>
            Try searching for your favourite movies.
            <input
              type="text"
              name="search"
              onChange={(e) => setFormDataBeforeSubmit(e.target.value)}
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
