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
  max-width: 80%;
  width: 80%;
  border: black 2px solid;
  background: whitesmoke;
  th {
    padding: 10px;
    background: #2b2c28;
  }
  tr {
    background: #2b2c28;
    color: black;
  }
  tr:hover {
    background: whitesmoke;
    color: black;
  }
  td {
    padding: 10px;
    color: black;
    text-align: left;
    text-align: center;
    border-bottom: 1px solid #bcbcbc;
  }
`;

export const Pagination = styled.div`
  max-width: 500px;
  display: flex;
  width: 500px;
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
