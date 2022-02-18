import React, { useState } from "react";

const TodoList = () => {
  const [text, setText] = useState();
  const [data, setData] = useState([]);
  const handleAdd = () => {
    setData([...data, text]);
    document.getElementById("input1").value = "";
  };

  return (
    <div>
      <input
        type="text"
        className="m-2"
        id="input1"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      {/* <button onClick={clearHandler}>clear</button> */}
      <h1>Todo List</h1>
      <ul>
        {data.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
