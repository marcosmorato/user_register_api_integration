import styled from "styled-components";

export const StyledReg = styled.main`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #282c34;
`;

export const Form = styled.form`
  padding: 5px;
  background-color: white;
  box-sizing: border-box;
  border: 1px solid #ccc;
  width: 30%;
  height: 70%;
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
    width: 10vw;
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
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  div {
    background-image: url("https://img.icons8.com/ios-glyphs/50/000000/user--v1.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    width: 20%;
    height: 40%;
  }

  input {
    box-sizing: border-box;
    width: 90%;
    height: 40%;
    border: 1.5px solid black;
    border-radius: 5px;
  }
  p {
    width: 90%;
    height: 5%;
    font-size: 10px;
  }
`;

export const Name = styled.div`
  box-sizing: border-box;

  width: 50%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  div {
    background-image: url("https://img.icons8.com/fluent-systems-filled/48/000000/user-menu-male.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    width: 20%;
    height: 40%;
  }

  input {
    box-sizing: border-box;
    width: 90%;
    height: 55%;
    border: 1.5px solid black;
    border-radius: 5px;
  }
  p {
    width: 90%;
    height: 5%;
    font-size: 10px;
  }
`;

export const Email = styled.div`
  box-sizing: border-box;
  width: 50%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  div {
    background-image: url("https://img.icons8.com/metro/48/000000/email.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 20%;
    height: 40%;
  }
  input {
    box-sizing: border-box;
    width: 90%;
    height: 40%;
    border: 1.5px solid black;
    border-radius: 5px;
  }
  p {
    width: 90%;
    height: 5%;
    font-size: 10px;
  }
`;

export const Pass = styled.div`
  box-sizing: border-box;
  width: 50%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  div {
    background-image: url("https://img.icons8.com/metro/48/000000/forgot-password.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 20%;
    height: 40%;
  }
  input {
    box-sizing: border-box;
    width: 90%;
    height: 40%;
    border: 1.5px solid black;
    border-radius: 5px;
  }
  p {
    width: 90%;
    height: 5%;
    font-size: 10px;
  }
`;
export const ConfirmPass = styled.div`
  box-sizing: border-box;
  width: 50%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  div {
    background-image: url("https://img.icons8.com/fluent-systems-filled/48/000000/security-shield-green.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 20%;
    height: 40%;
  }
  input {
    box-sizing: border-box;
    width: 90%;
    height: 40%;
    border: 1.5px solid black;
    border-radius: 5px;
  }
  p {
    width: 90%;
    height: 5%;
    font-size: 10px;
  }
`;
