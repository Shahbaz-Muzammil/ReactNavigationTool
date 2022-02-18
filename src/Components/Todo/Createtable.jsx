import React, { useState } from "react";
const Createtable = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const handle = () => {
    setData1([...data1, text1]);
    setData2([...data2, text2]);
    setData3([...data3, text3]);
  };
  return (
    <div>
      <input type="text" onChange={(e) => setText1(e.target.value)} />
      <input type="text" onChange={(e) => setText2(e.target.value)} />
      <input type="text" onChange={(e) => setText3(e.target.value)} />
      <button onClick={handle}>Add</button>

      <table>
        {/* <tr>
          <th>Name</th>
          <th>Mobile</th>
          <th>City</th>
        </tr> */}
        <tr>
          {data1.map((item) => {
            return <td>{item}</td>;
          })}
        </tr>
        <tr>
          {data2.map((item) => {
            return <td>{item}</td>;
          })}
        </tr>
        <tr>
          {data3.map((item) => {
            return <td>{item}</td>;
          })}
        </tr>
      </table>
    </div>
  );
};

export default Createtable;
