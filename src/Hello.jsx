import React from "react";
const Hello = ({ username }) => {
  console.log("Hello component rendered");
  return (
    <>
      <h2>Hello,{username}</h2>
    </>
  );
};

export default React.memo(Hello);
