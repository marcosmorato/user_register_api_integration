import styled from "styled-components";

export const Button = styled.button`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
  height: 50%;
  margin: 0 10px 0 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  outline: none;
  :hover {
    cursor: pointer;
    border: 2px solid white;
    background: #0a0b0b;
    color: whitesmoke;
  }
`;
