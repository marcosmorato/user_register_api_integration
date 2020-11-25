import styled from "styled-components";

export const Navigation = styled.nav`
  box-sizing: border-box;
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  background: #2b2c28;
  @media (max-width: 768px) {
    position: fixed;
  }

  a {
    cursor: pointer;
    color: whitesmoke;
    text-decoration: none;
    width: 10%;
    height: 35%;
    margin: 10px;
    padding: 10px;
    border: 2px solid whitesmoke;
    border-radius: 10px;
    font-size: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
      color: whitesmoke;
      background: #0a0b0b;
    }
    @media (max-width: 768px) {
      width: 20%;
      font-size: 1em;
    }
  }
`;
