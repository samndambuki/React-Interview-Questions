import { useRef } from "react";

const ChangeColor = () => {
  //create a ref for the p element
  const textRef = useRef(null);
  //modify the dom directly
  const changeColor = () => {
    textRef.current.style.color = "red";
  };
  return (
    <div>
      <p ref={textRef}>Hello, I will change the color</p>
      <button onClick={changeColor}>Change text color</button>
    </div>
  );
};

export default ChangeColor;
