import { connect } from "react-redux";
import { fetchUsers, deleteUser } from "actions";
import Table from "features/main/Table";

const mapStateToProps = (state) => {
  return {
    isUserListLoaded: state.user.isLoaded
  };
};

const mapDispatchToProps = {
  fetchUsers,
  deleteUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
