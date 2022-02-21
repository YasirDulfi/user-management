//Actions Types
export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USERS_FAIL = "FETCH_USERS_FAIL";
export const DELETE_USER = "DELETE_USER";

export const AUTHENTICATED_LOGIN = "AUTHENTICATED_LOGIN";
export const NOT_AUTHENTICATED_LOGIN = "NOT_AUTHENTICATED_LOGIN";
export const AUTHENTICATED_TOKEN = "AUTHENTICATED_TOKEN";
export const NOT_AUTHENTICATED_TOKEN = "NOT_AUTHENTICATED_TOKEN";

//Constants
const ENDPOINT = "https://reqres.in/api/users";

//Actions
export const fetchUsers = (paginate: number) => {
  return (dispatch) => {
    let url = `${ENDPOINT}?page=${paginate}`;
    fetch(url)
      .then((response) => response.json())
      .then((list) => {
        dispatch(fetchUsersSuccess(list));
      })
      .catch((error) => {
        dispatch(fetchUsersFail());
      });
  };
};

export const deleteUser = (user) => {
  let url = `${ENDPOINT}/${user.UserID}`;
  return (dispatch) => {
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(() => {
        dispatch(deleteUserSuccess(user.UserID));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const checkUserLogin = (userData) => {
  return (dispatch) => {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData)
    })
      .then((data) => data.json())
      .then((response) => {
        response.token && dispatch(loginSuccess(response));
        !response.token && dispatch(loginFail());
      })
      .catch((error) => {
        console.log("fail");
        dispatch(loginFail());
      });
  };
};

export const checkTokenLogin = () => {
  const TOKEN_EXPIRATION_DAYS = 30;
  return (dispatch) => {
    if (daysInBetween() < TOKEN_EXPIRATION_DAYS) {
      //aqui va el fetch que comprueba la validez del token
      //pero la plataforma pertinente no soporta este tipo
      //de validacion asi que se prosigue a redireccionar a main
      dispatch(tokenSuccess());
    } else {
      localStorage.removeItem("LaLiga");
      dispatch(tokenFail());
    }
  };
};

const daysInBetween = () => {
  const MILISECONDS_IN_DAY = 86400000;

  let token = JSON.parse(localStorage.getItem("LaLiga") || "");
  let tokenDate = new Date(token.date);
  let todayDate = new Date();

  return (todayDate.getTime() - tokenDate.getTime()) / MILISECONDS_IN_DAY;
  return 1;
};

//Action creators
export const fetchUsersSuccess = (list) => {
  return {
    type: FETCH_USERS,
    list
  };
};

export const fetchUsersFail = () => {
  return {
    type: FETCH_USERS_FAIL
  };
};
export const deleteUserSuccess = (id) => {
  return {
    type: DELETE_USER,
    id
  };
};

export const loginSuccess = (token) => {
  return {
    type: AUTHENTICATED_LOGIN,
    token
  };
};

export const loginFail = () => {
  return {
    type: NOT_AUTHENTICATED_LOGIN
  };
};

export const tokenSuccess = () => {
  return {
    type: AUTHENTICATED_TOKEN
  };
};

export const tokenFail = () => {
  return {
    type: NOT_AUTHENTICATED_TOKEN
  };
};
