import styled from "styled-components";
const MovieContainer = styled.div`
  display: ${(props) => (props.isComplex ? "block" : "flex")};
`;

export { MovieContainer };
