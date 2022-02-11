import React from "react";

const Buttons = ({ handleFunction, text }) => {
  return (
    <div>
      <button onClick={handleFunction}>Add {text}</button>
    </div>
  );
};

export default React.memo(Buttons);
