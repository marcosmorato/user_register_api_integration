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

export const ButtonGo = styled.button`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 50%;
  margin: 0 10px 0 10px;
  border: 2px solid whitesmoke;
  border-radius: 10px;
  outline: none;
  background: none;
  color: whitesmoke;
  font-weight: bold;

  :hover {
    cursor: pointer;
    background: #0a0b0b;
    color: whitesmoke;
  }

  @media (max-width: 768px) {
    width: 80%;
    height: 80%;
    font-size: 0.7em;
  }
`;

export const ButtonNew = styled.button`
  box-sizing: border-box;
  width: 25%;
  height: 5%;
  margin: 0 10px 10px 10px;
  background: none;
  color: whitesmoke;
  font-size: 1.2em;
  font-weight: bold;
  border: 2px solid whitesmoke;
  border-radius: 10px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
    background: #0a0b0b;
    color: whitesmoke;
  }

  @media (max-width: 768px) {
    width: 50%;
  }
`;

export const ButtonBack = styled.button`
  box-sizing: border-box;
  width: 10%;
  height: 5%;
  margin: 10px 0px 0px 0px;
  background: none;
  color: whitesmoke;
  font-size: 1.2em;
  font-weight: bold;
  border: 2px solid whitesmoke;
  border-radius: 10px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
    background: whitesmoke;
    color: #0a0b0b;
    border: 2px solid #0a0b0b;
  }

  @media (max-width: 768px) {
    width: 25%;
  }
`;

export const ButtonSend = styled.button`
  box-sizing: border-box;
  width: 50%;
  height: 10%;
  margin: 10px 0px 0px 0px;
  background: none;
  color: #0a0b0b;
  font-size: 1.2em;
  font-weight: bold;
  border: 2px solid #0a0b0b;
  border-radius: 10px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
    background: #0a0b0b;
    color: whitesmoke;
    border: 2px solid whitesmoke;
  }
`;

export const ButtonIni = styled.button`
  box-sizing: border-box;
  width: 40%;
  height: 80%;
  margin: 10px 0px 0px 0px;
  background: none;
  color: #0a0b0b;
  font-size: 1.2em;
  font-weight: bold;
  border: 2px solid #0a0b0b;
  border-radius: 10px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
    background: #0a0b0b;
    color: whitesmoke;
    border: 2px solid whitesmoke;
  }
`;
