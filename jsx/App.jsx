import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import ListContainer from "./containers/ListContainer";
import reducer from "./reducers";

const store = createStore(reducer());

const App = () => (
  <Provider store={store}>
    <ListContainer />
  </Provider>
);
export default App;
