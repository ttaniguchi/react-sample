import { handleActions } from "redux-actions";
import { add } from "../actions/ListAction";

const initialState = {
  items: ["default1", "default2"]
};
const reducer = handleActions(
  {
    [add]: (state, { payload: { item } }) => ({
      ...state,
      items: state.items.concat(item)
    })
  },
  initialState
);
export default reducer;
