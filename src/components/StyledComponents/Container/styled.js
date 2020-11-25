import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0a0b0b;

  @media (max-width: 768px) {
    height: 200vh;
  }

  h1 {
    color: white;

    @media (max-width: 768px) {
      margin: 10px 0 15px 0;
      font-size: 1.5em;
    }
  }
`;
