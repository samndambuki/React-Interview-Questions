import { useState } from "react";
import { useMemo } from "react";

const MemoExample = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  //expensive calculation
  const factorial = useMemo(() => {
    console.log("calculating factorial");
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }, [number]);

  return (
    <div>
      <h2>
        Factorial of {number}:{factorial}
      </h2>
      <button onClick={() => setNumber(number + 1)}>Increase number</button>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
    </div>
  );
};

export default MemoExample;
