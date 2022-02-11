import React, { useState } from "react";
import Buttons from "./Button";
import Title from "./Title";
import Value from "./Value";

const UseCallBack = () => {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(0);

  const handleAge = () => {
    setAge(age + 1);
  };
  const handleSalary = () => {
    setSalary(salary + 5000);
  };
  return (
    <div>
      <h1>This is parent comp</h1>
      <Title />
      <Value text="Age" count={age} />
      <Buttons text="Age" handleFunction={handleAge} />
      <Value text="Salary" count={salary} />
      <Buttons text="Salary" handleFunction={handleSalary} />
    </div>
  );
};

export default UseCallBack;
