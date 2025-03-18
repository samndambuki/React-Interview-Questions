// //SCENARIO
// //we have a button inside a child component
// //react creates a new function every time the parent re-reders
// //but we'll use useCallback to remember the function so it doesnt change unnecessarily

// import ChildButton from "./ChildButton";
// import { useState, useCallback } from "react";

// //without using callback
// const Parent = () => {
//   const [count, setCount] = useState(0);

//   //   const handleClick = () => {
//   //     alert("Button Clicked");
//   //   };

//   const handleClick = useCallback(() => {
//     alert("Button clicked");
//   }, []);

//   return (
//     <div>
//       <h2>Count:{count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       {/* passing function to child  */}
//       <ChildButton handleClick={handleClick} />
//     </div>
//   );
// };

// export default Parent;

import { createContext, useContext } from "react";

//create context
const UserContext = createContext();
const Parent = () => {
  return (
    <UserContext.Provider value="Grandma's secret recipe">
      <Child />
    </UserContext.Provider>
  );
};

const Child = () => {
  const secret = useContext(UserContext);
  return <h2>Secret:{secret}</h2>;
};

export default Parent;
