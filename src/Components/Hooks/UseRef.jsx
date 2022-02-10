import React, { useRef, useEffect } from "react";

const UseRef = () => {
  const inputRef = useRef();

  return (
    <div>
      <input ref={inputRef} type="file" style={{ display: "none" }} />
      <br />
      <i
        class="fas fa-upload"
        onClick={() => {
          inputRef.current.click();
        }}
      ></i>
      <br />
    </div>
  );
};

export default UseRef;
