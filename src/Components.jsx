import { useState, useRef } from "react";

const Components = () => {
  //controlled - react manages the state
  const [name, setName] = useState("");
  //uncontrolled - DOM manages the state
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Controlled name : ${name}\n Uncontrolled Email :  ${emailRef.current.value}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name (Controlled):</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Email</label>
        <input type="email" ref={emailRef}></input>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Components;
