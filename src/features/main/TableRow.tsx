import React from "react";
import styled from "styled-components";

import DeleteUserLogo from "assets/trash.png";
import ModifyLogo from "assets/register.png";

interface IProps {
  UserID: number;
  Name: string;
  Surname: string;
  Email: string;
  onDelete: (user: Object) => void;
}
const TableRow = (props: IProps) => {
  return (
    <ContentRow>
      <ContentTD>{props.UserID}</ContentTD>
      <ContentTD>{props.Name}</ContentTD>
      <ContentTD>{props.Surname}</ContentTD>
      <ContentTD>{props.Email}</ContentTD>
      <OtherOptions>
        <ModifyUserBtn>
          <ImageOptions src={ModifyLogo} />
        </ModifyUserBtn>
        <DeleteUserBtn
          onClick={() => {
            props.onDelete(props);
          }}
        >
          <ImageOptions src={DeleteUserLogo} />
        </DeleteUserBtn>
      </OtherOptions>
    </ContentRow>
  );
};

export default TableRow;

const ContentRow = styled.tr`
  background-color: white;
  /* border-collapse: collapse;
  border-spacing: 0px;
  padding: 0; */
`;
const ContentTD = styled.td`
  margin-top: 10px;
  height: 80px;
  border-collapse: collapse;
  border-spacing: 0px;
  border: none;
  padding: 0;
`;
const OtherOptions = styled.td``;

const ModifyUserBtn = styled.button`
  height: 42px;
  width: 42px;
  padding: 8px;
  /* margin-left: max; */
  background-color: #47a6ffd1;
  border: none;
  border-radius: 7px;
`;

const DeleteUserBtn = styled.button`
  height: 42px;
  width: 42px;
  padding: 8px;
  margin-left: 10px;
  background-color: #ff5c47e4;
  border: none;
  border-radius: 7px;
`;
const ImageOptions = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: block;
`;
