import { DELETE_USER, FETCH_USERS, FETCH_USERS_FAIL } from "actions";
import { IUser } from "views/main";

interface userList {
  id: number;
  name: string;
  surname: string;
  email: string;
}
interface IState {
  data: userList[];
  per_page: number;
  numberPage: number;
  isLoaded: boolean | undefined;
}
const initialState: IState[] = [
  {
    data: [
      {
        id: 0,
        name: "",
        surname: "",
        email: ""
      }
    ],
    per_page: 0,
    numberPage: 0,
    isLoaded: undefined
  }
];

const filter = (id: number, state) => {
  let filteredObject: IUser[] = [];
  state.data.forEach((object: IUser) => {
    if (object.id !== id) {
      filteredObject.push(object);
    }
  });
  console.log("State filtrado: ---------------------");
  console.log(state);
  return { ...state, data: filteredObject, per_page: state.per_page - 1 };
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      console.log("fetch");
      return { ...action.list, isLoaded: true };
    case FETCH_USERS_FAIL:
      console.log("fetch fail");
      return { ...state, isLoaded: false };
    case DELETE_USER:
      return filter(action.id, state);
    default:
      return { ...state };
  }
};
export default userReducer;
