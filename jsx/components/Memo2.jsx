import React, { useState } from "react";

const Memo2 = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const handleClick = () => {
    setList([...list, text]);
  };
  const handleDelete = idx => {
    const tempList = list.filter((item, i) => i !== idx);
    setList(tempList);
  };
  return (
    <div>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleClick}>Add</button>
      <ul>
        {list.map((item, idx) => (
          <li key={idx}>
            {item}
            <button onClick={() => handleDelete(idx)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Memo2;
