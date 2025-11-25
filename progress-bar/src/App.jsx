import React, { useState } from "react";
import Progress from "./Components/Progress";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <button onClick={() => setToggle((prev) => !prev)}>Toggle</button>
      {toggle && <Progress />}
    </>
  );
}

export default App;
