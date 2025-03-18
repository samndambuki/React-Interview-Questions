import { useState, useEffect } from "react";

const Track = () => {
  //user is an object with a name property initially empty
  const [user, setUser] = useState({ name: "" });

  useEffect(() => {
    console.log("Name changed", user.name);
  }, [user.name]);

  return (
    <div>
      <input
        type="text"
        // keeps input controlled(linked to a state)
        value={user.name}
        // updates user.name when user types
        onChange={(e) => setUser({ name: e.target.value })}
      />
      {/* displays current name entered in the input field  */}
      <p>Name:{user.name}</p>
    </div>
  );
};

export default Track;
