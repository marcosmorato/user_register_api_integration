import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 90vh;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #0a0b0b;
`;

export const Navigation = styled.nav`
  box-sizing: border-box;
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  background: #2b2c28;
  button {
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
    }
    a {
      color: black;
      text-decoration: none;
      width: 100%;
      height: 100%;
      font-size: 1em;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    a:hover {
      color: whitesmoke;
      background: #0a0b0b;
    }
  }
`;
