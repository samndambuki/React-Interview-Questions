import React from "react";
const ChildButton = ({ handleClick }) => {
  console.log("Child rendered");
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

//React.memo - react remembers the last version of the component
//if the props have changed react wont re-render
//if the props change react will re-render
export default React.memo(ChildButton);
