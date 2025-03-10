//peculiarities - state updates are asynchrounous and do not immediately reflect changes
import { useState } from "react";
const AsyncState = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    console.log("Before update", count);
    // setCount(count + 1);

    //if you want to update use a callback
    setCount((prev) => {
      console.log("Updated count", prev + 1);
      return prev + 1;
    });
    // console.log("After update", count);
  };
  return (
    <div>
      <h2>State updates are asynchronous</h2>
      <p>Count : {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default AsyncState;
