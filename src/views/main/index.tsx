import React, { useEffect, useState } from "react";
import styled from "styled-components";

import NavBar from "features/main/NavBar";
import SortFormTable from "features/main/SortFormTable";
import FailUserFetch from "features/main/FailUserFetch";
import TableContainer from "container/TableContainer";

export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
}
export interface ISettings {
  searchInput: string;
  optionsInput: string;
}

const initialSettings: ISettings = {
  searchInput: "",
  optionsInput: "id"
};

export function Main(props) {
  const [filteredList, setFilteredList] = useState<IUser[] | null>(null);
  // const [filterSettings, setFilterSettings] = useState(initialSettings);

  //como hago para la comprobacion del acceso al main en caso de que el token
  //no exista? tengo que haer algun fetch que compruebe su validez
  //y si el token es falso o no es valido
  // useEffect(() => {
  //   const getToken = JSON.parse(localStorage.getItem('LaLiga') || "" );
  //   fetch()
  //     .then()
  //     .then()
  //     .catch(){}
  // }, [])

  useEffect(() => {
    console.log("fake list");
    if (!props.usersList) {
      props.fetchUsers(1);
    }
    props.usersList && setFilteredList(props.usersList);
  }, [props.usersList]);

  console.log("se esta renderizando");
  return (
    <React.Fragment>
      <NavBar />
      <MainContainer>
        {props.numberOfUsers && (
          <SortFormTable
            numberOfUsers={props.numberOfUsers}
            // onSortBy={sortBy}
          />
        )}
        {props.isUserListLoaded && (
          <TableContainer filteredList={filteredList} />
        )}
        {props.isUserListLoaded === false && <FailUserFetch />}
      </MainContainer>
    </React.Fragment>
  );
}

const MainContainer = styled.section`
  max-width: 100%;
  height: 100%;
  /* height: minmax(100vh, auto); */
  /* porque no funciona esto??? */
  padding: 40px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: #e7e7e7;
`;

export default Main;
