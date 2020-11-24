import styled from "styled-components";

export const Table = styled.table`
  width: 80%;
  height: 70%;
  background: whitesmoke;
  color: Black;
  text-align: center;
  border-radius: 10px;
`;

export const TableRow = styled.tr`
  background: #2b2c28;
  color: white;

  th {
    background: #0a0b0b;
    border-radius: 5px;
  }
`;

export const TableCell = styled.td`
  background: #2b2c28;
  border-radius: 10px;

  :hover {
    background: black;
    color: white;
  }
`;

export const TableFooter = styled.div`
  width: 80%;
  height: 10%;
  border-radius: 10px;
  background: whitesmoke;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

export const PaginationButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
