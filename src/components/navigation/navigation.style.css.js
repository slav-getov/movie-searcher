import styled from "styled-components";
import { Link } from "react-router-dom";
const NavStyles = styled.nav``;

const UlStyles = styled.ul`
  display: flex;

  list-style: none;
  gap: 2em;
`;

const LiStyles = styled.li`
  padding: 1em;
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
`;

export { NavStyles, UlStyles, LiStyles, LinkStyle };
