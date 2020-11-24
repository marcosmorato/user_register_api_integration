import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #282c34;
`;

export const Navigation = styled.nav`
  box-sizing: border-box;
  width: 100%;
  height: 5%;
  display: flex;
  padding: 10px;

  div {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    margin: 0 10px 0 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    :hover {
      cursor: pointer;
      border: 2px solid aqua;
    }
    a {
      color: white;
      text-decoration: none;
      width: 100%;
      text-align: center;
    }
  }
`;
