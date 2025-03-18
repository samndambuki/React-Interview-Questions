//when i click changeName
//the entire div is not rerendered
//it only changes the name
//button and div remain the same

import { useState } from "react";

const Reconciliation = () => {
  const [name, setName] = useState("Sam");
  return (
    <>
      <h1>My name is {name}</h1>
      <button onClick={() => setName("John")}>Change name</button>
    </>
  );
};

export default Reconciliation;
