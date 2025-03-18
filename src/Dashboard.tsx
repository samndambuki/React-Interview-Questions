import React, { useState } from "react";
import Hello from "./Hello";

const Dashboard = () => {
  const [clickCount, setClickCount] = useState(0);
  const [username, setUsername] = useState("Sam");

  return (
    <div>
      <h2>Click count:{clickCount}</h2>
      <button onClick={() => setClickCount(clickCount + 1)}>
        Increase Count
      </button>
      <Hello username={username} />
    </div>
  );
};

export default Dashboard;
