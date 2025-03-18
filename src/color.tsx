import React, { useRef } from "react";

const ParagraphColor = () => {
  const paraRef = useRef<HTMLParagraphElement>(null);
  const changeColor = () => {
    if (paraRef.current) {
      paraRef.current.style.color = "red";
    }
  };
  return (
    <>
      <p ref={paraRef}>This is a paragrapgh</p>
      <button onClick={changeColor}>Change color</button>
    </>
  );
};

export default ParagraphColor;
