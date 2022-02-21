import {
  AUTHENTICATED_LOGIN,
  AUTHENTICATED_TOKEN,
  NOT_AUTHENTICATED_LOGIN,
  NOT_AUTHENTICATED_TOKEN
} from "actions";

type State = {
  tokenIsValid: boolean;
  isItAuthenticated: null | boolean;
};
const initialState: State = {
  tokenIsValid: false,
  //si ya existe un token y es valido date se hace fetch para combrobar su
  //validez al backend y si es valido se redirecciona
  isItAuthenticated: null
  //isItAuth sirve para validar si el el fetch del form return true
  //redirecciona a main si retunr false mensaje "usuario no existente"
};
//si se quiere loguear isItAuth es true o con el isToken true

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATED_LOGIN:
      console.log("authentification is valid");
      createLocalStorage(action.token.token);
      return { ...state, isItAuthenticated: true };
    case NOT_AUTHENTICATED_LOGIN:
      console.log("authentification failed");
      return { ...state, isItAuthenticated: false };
    case AUTHENTICATED_TOKEN:
      console.log("reducer token is valid");
      return { ...state, tokenIsValid: true };
    case NOT_AUTHENTICATED_TOKEN:
      console.log("reducer token not valid");
      return { ...state, tokenIsValid: false };
    default:
      return state;
  }
}

const createLocalStorage = (token) => {
  const date = new Date();
  localStorage.setItem(
    "LaLiga",
    JSON.stringify({
      token: token,
      date
    })
  );
};

export default loginReducer;
