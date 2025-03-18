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
import MemoExample from "./MemoExample";
import ChangeColor from "./ChangeColor";
import Dashboard from "./Dashboard";
import MyComponent from "./MyComponent";
import Reconciliation from "./Reconciliation";
import Students from "./Students";
import Track from "./Track";
import ParagraphColor from "./color";
import CustomHook from "./customHook";
import JokeApp from "./JokeApp";
import { Button, Card } from "./components";

function App() {
  // const [showComponent, setShowComponent] = useState(true);
  // const [isOn, toggleIsOn] = CustomHook();
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
        {/* <Parent /> */}
        {/* <MemoExample /> */}
        {/* <Parent /> */}
        {/* <ChangeColor /> */}
        {/* <Dashboard /> */}
        {/* <MyComponent /> */}
        {/* <Reconciliation /> */}
        {/* <Students /> */}
        {/* <Track /> */}
        {/* <ParagraphColor /> */}
        {/* <div>
          <p>{isOn ? "ON" : "OFF"}</p>
          <button onClick={toggleIsOn}>Toggle</button>
        </div> */}
        {/* <JokeApp /> */}
        <Card />
        <Button />
      </div>
    </>
  );
}

export default App;
