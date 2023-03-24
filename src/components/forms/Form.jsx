import React from "react";
import ActionableButton from "../shared/ActionableButton";
import { FieldsetStyles } from "./form.style.css";
import { useSelector, useDispatch } from "react-redux";
import {
  updateFormSearchParams,
  nullFormSearchParams,
} from "../slices/formSlice";

const Form = () => {
  const init = useSelector((state) => state.form.value);
  console.log(init);
  const dispatch = useDispatch();
  //console.log(init); works
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(nullFormSearchParams());
        console.log("you submitted");
      }}
    >
      <FieldsetStyles>
        <label>
          Try searching for your favourite movies.
          <input
            type="text"
            name="search"
            onChange={(e) => dispatch(updateFormSearchParams(e.target.value))}
          />
        </label>
      </FieldsetStyles>

      <ActionableButton title="Search" backgroundColor={"blue"} />
    </form>
  );
};

export default Form;
