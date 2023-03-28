import styled from "styled-components";
const MovieContainer = styled.div`
  display: ${(props) => (props.isComplex ? "block" : "flex")};
  justify-content: center;
  align-items: center;
  gap: 2em;
  border: ${(props) => (props.isComplex ? "" : ".5em solid black")};
`;

export { MovieContainer };
