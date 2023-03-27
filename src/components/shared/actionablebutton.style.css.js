import styled from "styled-components";

const ButtonStyles = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: white;
  padding: 1em;
  margin: 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export { ButtonStyles };
