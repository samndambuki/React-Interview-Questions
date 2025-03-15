import { useState } from "react";

const MessageToggle = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Message</button>
      {/* conditional rendering using &&  */}
      {isVisible && <p>Hello World!This message is toggled</p>}
    </div>
  );
};

export default MessageToggle;
