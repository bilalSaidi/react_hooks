import React, { useEffect, useRef, useState } from "react";
import "./useRefHook.module.css";
const UseRefHook = () => {
  const [name, setName] = useState("");
  let numberRender = useRef(0);
  const finalName = useRef();
  const inputName = useRef();
  const handlesubmit = (e) => {
    e.preventDefault();
    finalName.current = name;
    setName("");
    inputName.current.focus();
  };
  useEffect(() => {
    numberRender.current = numberRender.current + 1;
  });
  return (
    <>
      <form onSubmit={(e) => handlesubmit(e)}>
        <input
          type="text"
          placeholder="enter name"
          value={name}
          ref={inputName}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      <p>You Typed : {name}</p>
      <p>Your final Text : {finalName.current}</p>

      <p>rendring app number : {numberRender.current}</p>
    </>
  );
};

export default UseRefHook;
