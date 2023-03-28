import styled from "styled-components";
import ActionableButton from "../shared/ActionableButton";
const FieldsetStyles = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const FormStyle = styled.form`
  width: 40%;
  margin-left: 0.5em;
  background-color: #fffaf2;
  color: #7f7d78;
  padding: 0.5em;
  border-radius: 0.5em;
`;

const SearchInputStyle = styled.input`
  border: none;
  outline: none;
  background-color: #f5efe6;
  padding: 0.5em;
  border-radius: 0.5em;
`;

const FormButton = styled(ActionableButton)``;
export { FormStyle, FieldsetStyles, SearchInputStyle, FormButton };
