import { useState, useEffect } from "react";

const UnmountTracker = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("mounted");
    return () => {
      console.log("unmounted");
    };
  });
  return (
    <div>
      <h2>Count:{count}</h2>
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

export default UnmountTracker;
