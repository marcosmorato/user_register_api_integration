import styled from "styled-components";

export const Main = styled.div`
  box-sizing: border-box;
  display: flex;

  height: 90vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #0a0b0b;
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
