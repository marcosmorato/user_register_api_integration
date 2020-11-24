import styled from "styled-components";

export const Main = styled.div`
  box-sizing: border-box;
  display: flex;

  height: 90vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #282c34;
  button {
    width: 10%;
    height: 5%;
    border: 1px solid black;
    border-radius: 10px;
    margin-top: 10px;
    font-size: 1.2rem;
    :hover {
      cursor: pointer;
      border: 2px solid black;
      border-radius: 10px;
    }
  }
`;

export const Form = styled.form`
  background-color: white;
  box-sizing: border-box;
  border: 1px solid #ccc;
  width: 25%;
  height: 50%;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    width: 25%;
    height: 10%;
    border: 1px solid black;
    border-radius: 10px;
    :hover {
      cursor: pointer;
      border: 2px solid black;
      border-radius: 10px;
    }
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

  input {
    box-sizing: border-box;
    width: 100%;
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

export const Comment = styled.div`
  box-sizing: border-box;

  width: 50%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  input {
    box-sizing: border-box;
    width: 100%;
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

export const Grade = styled.div`
  box-sizing: border-box;

  width: 50%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  input {
    box-sizing: border-box;
    width: 100%;
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
