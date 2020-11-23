import styled from "styled-components";

export const StyledLog = styled.main`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #282c34;
`;

export const Form = styled.form`
  background-color: white;
  box-sizing: border-box;
  border: 1px solid #ccc;
  width: 20%;
  height: 40%;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 250%;
    margin-top: 0px;
  }

  button {
    width: 80px;
    height: 30px;
    border: 1px solid black;
    border-radius: 10px;
    :hover {
      cursor: pointer;
      border: 2px solid black;
      border-radius: 10px;
    }
  }
`;
export const User = styled.div`
  box-sizing: border-box;

  width: 50%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    background-image: url("https://img.icons8.com/ios-glyphs/50/000000/user--v1.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    width: 20%;
    height: 40%;
    text-align: center;
    margin-right: 5px;
  }

  input {
    box-sizing: border-box;
    width: 75%;
    height: 60%;
    border: 1.5px solid black;
    border-radius: 5px;
  }
`;

export const Pass = styled.div`
  box-sizing: border-box;
  width: 50%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    background-image: url("https://img.icons8.com/metro/26/000000/forgot-password.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 20%;
    height: 40%;
    text-align: center;
    margin-right: 5px;
  }
  input {
    box-sizing: border-box;
    width: 75%;
    height: 60%;
    border: 1.5px solid black;
    border-radius: 5px;
  }
`;
