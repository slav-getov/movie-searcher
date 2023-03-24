import React from "react";
import ActionableButton from "../shared/ActionableButton";
import { FieldsetStyles } from "./form.style.css";
const handleSubmit = (e) => {
  e.preventDefault();
  console.log("you submitted");
};
const Form = () => {
  return (
    <form onSubmit={handleSubmit}>
      <FieldsetStyles>
        <label>
          Try searching for your favourite movies.
          <input
            type="text"
            name="search"
            onChange={() => console.log("you changed.")}
          />
        </label>
      </FieldsetStyles>

      <ActionableButton title="Search" backgroundColor={"blue"} />
    </form>
  );
};

export default Form;
