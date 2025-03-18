import { useState } from "react";

const CustomHook = () => {
  const [value, setValue] = useState(false);
  const toggle = () => setValue(!value);
  return [value, toggle];
};

export default CustomHook;
