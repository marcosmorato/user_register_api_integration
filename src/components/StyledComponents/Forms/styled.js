import styled from "styled-components";

export const Form = styled.form`
  box-sizing: border-box;
  background-color: white;
  border: 5px solid #2b2c28;
  width: 30%;
  height: 70%;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 90%;
    height: 50%;
  }
`;

export const Reg = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    height: 23%;
  }

  p {
    box-sizing: border-box;
    height: 30%;
    width: 100%;
    text-align: center;
    margin: 10px 0 0px 0;
    font-size: 1em;
    color: red;
  }
`;
export const Row = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }

  input {
    padding: 10px;
    font-size: 16px;
    width: 60%;
    height: 50%;
    border: 2px solid #0a0b0b;
    border-radius: 10px;
    outline: none;

    :hover {
      background: #2b2c28;
      color: whitesmoke;
    }
  }
`;
