import { useState } from "react";

const FunctionalCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Functional counter : {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default FunctionalCounter;
