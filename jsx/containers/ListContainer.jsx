import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { add } from "./../actions/ListAction";
import List from "./../components/List";

const mapStateToProps = ({ list }) => ({
  items: list.items
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      add
    },
    dispatch
  );
const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);
export default ListContainer;
