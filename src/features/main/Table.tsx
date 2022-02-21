import React from "react";
import styled from "styled-components";
import { IUser } from "views/main";
import TableRow from "./TableRow";

const Table = (props) => {
  return (
    <TableContainer>
      <thead>
        <IndexRow>
          <IndexTD>ID</IndexTD>
          <IndexTD>Name</IndexTD>
          <IndexTD>Surname</IndexTD>
          <IndexTD>Email</IndexTD>
          <IndexTD>Options</IndexTD>
        </IndexRow>
      </thead>
      <tbody>
        {props.isUserListLoaded &&
          props.filteredList &&
          props.filteredList.map((user: IUser) => {
            return (
              <TableRow
                key={user.id}
                UserID={user.id}
                Name={user.first_name}
                Surname={user.last_name}
                Email={user.email}
                onDelete={props.deleteUser}
              />
            );
          })}
      </tbody>
    </TableContainer>
  );
};

const TableContainer = styled.table`
  width: 90%;
  height: auto;
  text-align: center;
`;
const IndexRow = styled.tr`
  overflow: hidden;
  border-radius: 5px;
  margin: 100px 0px;
  /* !!!! */
`;
const IndexTD = styled.td`
  height: 80px;
`;

export default Table;
