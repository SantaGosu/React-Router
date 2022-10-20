
import React, { useState } from "react";


const TodoList = () => {
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);

  const changeData = (e) => {
    setInput(e.target.value);
  };

  const AddToList = () => {
    setData([...data, input]);
    setInput("");
  };


  return (
    <>
      <input type="submit" value={input} onChange={(e) => changeData(e)} />
      <button onClick={AddToList}>Add</button>
      {data.map((data) => (
        <li>{data}</li>
      ))}
    </>
  );
}

export default TodoList;
