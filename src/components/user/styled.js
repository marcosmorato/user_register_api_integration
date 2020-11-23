import styled from "styled-components";

export const Container = styled.div``;

export const Table = styled.table`
  max-width: 1500px;
  width: 1500px;
  /* border-collapse: collapse; */
  border: black 2px solid;
  th {
    padding: 10px;

    background: #ccc;
    /* text-align: left; */
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
