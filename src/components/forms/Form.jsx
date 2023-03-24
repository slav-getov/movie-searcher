import React from "react";
import ActionableButton from "../shared/ActionableButton";
import { FieldsetStyles } from "./form.style.css";
import { useSelector, useDispatch } from "react-redux";
import {
  updateFormSearchParams,
  nullFormSearchParams,
} from "../slices/formSlice";

const Form = () => {
  const value = useSelector((state) => state.form.value);

  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        //console.log(e.target.search.value);
        console.log("value on submit is " + e.target.search.value);
        dispatch(updateFormSearchParams(e.target.search.value));
        //dispatch(nullFormSearchParams());
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
  );
};

export default Form;
