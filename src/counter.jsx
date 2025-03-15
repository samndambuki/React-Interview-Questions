// import { useState, useEffect } from "react";
// const Counter = () => {
//   //useState - manages state
//   //setCount - updates count when clicking buttons
//   const [count, setCount] = useState(0);
//   //handles side effects
//   //runs when count changes
//   useEffect(() => {
//     console.log(`Count updated:${count}`);
//   }, [count]);
//   return (
//     <div>
//       <h2>Counter:{count}</h2>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Increment
//       </button>
//       <button
//         onClick={() => {
//           setCount(count - 1);
//         }}
//       >
//         Decrement
//       </button>
//     </div>
//   );
// };
// export default Counter;

import { useReducer } from "react";
import counterReducer from "./CounterReducer";

const Counter = () => {
  //state - holds the current state
  //dispatch - sends actions to the reducer
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <div>
      <h2>Count:{state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
};

export default Counter;
