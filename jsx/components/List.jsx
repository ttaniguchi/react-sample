import React, { useState } from "react";
import PropTypes from "prop-types";

const List = ({ items, add }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button onClick={() => add({ item: text })}>Add</button>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            <div>{item}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  add: PropTypes.func
};
List.defaultProps = {
  items: [],
  add: () => {}
};
export default List;
