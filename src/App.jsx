import "./App.css";
import Counter from "./counter";
import { ThemeProvider } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";
import FruitList from "./FruitList";
import Components from "./Components";
import ClassCounter from "./ClassCounter";
import FunctionalCounter from "./FunctionalCounter";
import AsyncState from "./AsyncState";
import UnmountTracker from "./UnmountTracker";
import { useState } from "react";
import Greeting from "./Greeting";
import MessageToggle from "./MessageToggle";
import ExpensiveComputation from "./ExpensiveComputation";
import Parent from "./Parent";

function App() {
  // const [showComponent, setShowComponent] = useState(true);
  return (
    <>
      {/* <div className="card">
        <Counter />
      </div> */}
      {/* <ThemeProvider>
        <div>
          <h1>useContext Example</h1>
          <ThemeToggle />
        </div>
      </ThemeProvider> */}
      {/* <FruitList /> */}
      {/* <Components /> */}
      {/* <ClassCounter />
      <FunctionalCounter /> */}
      {/* <AsyncState /> */}
      {/* <div>
        <h1>Unmounting example</h1>
        <button onClick={() => setShowComponent(!showComponent)}>
          {showComponent ? "hide" : "show"}
          Component
        </button>
        {showComponent && <UnmountTracker />}
      </div> */}
      {/* <Greeting name="Samuel" /> */}
      <div>
        {/* <h1>Simple reducer example</h1>
        <Counter /> */}
        {/* <MessageToggle /> */}
        {/* <ExpensiveComputation /> */}
        <Parent />
      </div>
    </>
  );
}

export default App;
