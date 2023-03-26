import styled from "styled-components";

const WatchlistContainer = styled.div`
  text-align: center;
`;

const UlStyles = styled.ul`
  display: inline-block;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LiStyles = styled.li`
  width: 50%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: all 0.3s ease;
  &: hover {
    background-color: #f5f5f5;
    cursor: pointer;
    border-color: #666;
  }

  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export { WatchlistContainer, UlStyles, LiStyles };
