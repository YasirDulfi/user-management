import { connect } from "react-redux";
import Main from "views/main";
import { fetchUsers } from "actions";

const mapStateToProps = (state) => {
  return {
    isUserListLoaded: state.user.isLoaded,
    usersList: state.user.data,
    numberOfUsers: state.user.per_page
  };
};

const mapDispatchToProps = {
  fetchUsers
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
