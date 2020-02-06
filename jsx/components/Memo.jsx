import React, { useState } from 'react';

const Memo = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState('');

  const handleClick = () => {
    setList([...list, text]);
    setText('');
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={handleClick}>
        Add
      </button>
      <ul>
        {list.map((item, idx) => (
          <li key={idx}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Memo;
