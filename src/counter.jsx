import { useState, useEffect } from "react";
const Counter = () => {
  //useState - manages state
  //setCount - updates count when clicking buttons
  const [count, setCount] = useState(0);
  //handles side effects
  //runs when count changes
  useEffect(() => {
    console.log(`Count updated:${count}`);
  }, [count]);
  return (
    <div>
      <h2>Counter:{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};
export default Counter;
