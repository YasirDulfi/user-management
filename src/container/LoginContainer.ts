import { connect } from "react-redux";
import { Login } from "views/login";
import { checkUserLogin, checkTokenLogin } from "actions";
const mapStateToProps = (state) => {
  return {
    tokenIsValid: state.authorization.tokenIsValid,
    isItAuthenticated: state.authorization.isItAuthenticated
  };
};
const mapDispatcToProps = {
  checkUserLogin,
  checkTokenLogin
};

export default connect(mapStateToProps, mapDispatcToProps)(Login);
