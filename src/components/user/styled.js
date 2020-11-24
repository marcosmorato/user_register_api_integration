import styled from "styled-components";
export const Container = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0a0b0b;

  h1 {
    color: white;
  }
`;

export const Table = styled.table`
  width: 80%;
  height: 80%;
  border: black 2px solid;
  background: whitesmoke;
  tr {
    box-sizing: border-box;

    background: #2b2c28;
    color: black;
  }
  th {
    box-sizing: border-box;
    background: #2b2c28;
  }
  tr:hover {
    background: whitesmoke;
    color: black;
  }
  td {
    color: black;
    border-bottom: 1px solid #bcbcbc;
  }

  tfoot {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PaginationButton = styled.div`
  display: flex;
`;
export const PaginationItem = styled.div`
  margin: 0 10px;
  cursor: pointer;
  ${(props) =>
    props.isSelect && {
      background: "aquamarine",
      padding: "5px",
    }}
`;
