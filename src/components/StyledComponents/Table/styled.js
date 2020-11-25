import styled from "styled-components";

export const Table = styled.table`
  box-sizing: border-box;
  width: 90%;
  height: 70%;
  background: whitesmoke;
  color: Black;
  text-align: center;
  border-radius: 10px;
  word-break: break-word;

  @media (max-width: 1024px) {
    width: 95%;
    height: 70%;
  }
`;

export const TableRow = styled.tr`
  background: #2b2c28;
  color: white;

  th {
    background: #0a0b0b;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TableCell = styled.td`
  background: #2b2c28;
  border-radius: 10px;

  :hover {
    background: black;
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

export const TableFooter = styled.div`
  box-sizing: border-box;
  width: 90%;
  height: 10%;
  border-radius: 10px;
  background: whitesmoke;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    width: 95%;
    height: 10%;
    flex-wrap: wrap;
    background: whitesmoke;
  }
`;

export const Pagination = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  text-align: center;

  div {
    font-weight: bold;
  }

  @media (max-width: 1024px) {
    font-size: 0.7em;

    flex-direction: column-reverse;
  }
`;

export const PaginationButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
export const PaginationItem = styled.div`
  cursor: pointer;
  margin: 0 10px;
  font-size: 1.2em;

  :hover {
    background: #0a0b0b;
    color: white;
    border-radius: 5px;
  }
  ${(props) =>
    props.isSelect && {
      background: "black",
      color: "whitesmoke",
      borderRadius: "5px",
    }}
`;
