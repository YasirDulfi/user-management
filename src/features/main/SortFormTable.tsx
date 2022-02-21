import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

//PICTURES
import SearchImg from "assets/search.png";
import ConvertPDFLogo from "assets/pdf.png";

const SortFormTable = (props) => {
  const { register, handleSubmit } = useForm();

  const onFormSubmit = (data) => {
    props.onSortBy(data);
  };
  return (
    <SortForm onChange={handleSubmit(onFormSubmit)}>
      <Name>Users ({props.numberOfUsers})</Name>
      <SearchContainer>
        <SearchLogo src={SearchImg} />
        <SeachInput placeholder="Search Users" {...register("searchInput")} />
      </SearchContainer>
      <OrganizeBy {...register("optionsInput")}>
        <Options value="id">Id</Options>
        <Options value="name">Name</Options>
        <Options value="surname">Surname</Options>
        <Options value="email">Email</Options>
      </OrganizeBy>
      <PDFBtn>
        <PDFImg src={ConvertPDFLogo} />
      </PDFBtn>
    </SortForm>
  );
};

export default SortFormTable;

const SortForm = styled.form`
  width: 90%;
  height: 80px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const Name = styled.div`
  font-size: 30px;
  margin-right: 25px;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  margin-right: auto;
`;
const SearchLogo = styled.img`
  height: 50px;
  width: 50px;
  padding: 13px;
  background-color: white;
`;
const SeachInput = styled.input`
  height: 50px;
  width: 200px;
  border: none;
  font-size: 16px;
  background: white;
  outline: none;
  &:focus {
    border-bottom: 1px solid black;
    border-color: blueviolet;
  }
`;

const OrganizeBy = styled.select`
  height: 50px;
  width: 200px;
  padding: 15px;
  font-size: 16px;
  background-color: white;
  border: none;
  border-radius: 10px;
  outline: none;
`;

const PDFBtn = styled.button`
  height: 50px;
  width: 50px;
  border: none;
  padding: 10px;
  margin-left: 15px;
  border-radius: 10px;
  background-color: white;
`;
const PDFImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: block;
`;

const Options = styled.option``;
