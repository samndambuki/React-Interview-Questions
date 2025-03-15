import { useState } from "react";
import { useMemo } from "react";

const ExpensiveComputation = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  const factorial = useMemo(
    () => {
      console.log("calculating factorial");
      let result = 1;
      for (let i = 1; i <= number; i++) {
        result *= i;
      }
      return result;
    },
    //re calculate only when number changes
    [number]
  );

  return (
    <div>
      <h2>
        Factorial of {number}:{factorial}
      </h2>
      <button onClick={() => setNumber(number + 1)}>Increase the number</button>
      <h2>Counter:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>
    </div>
  );
};

export default ExpensiveComputation;
