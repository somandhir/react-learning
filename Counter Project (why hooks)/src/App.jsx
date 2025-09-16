import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  const addVal = () => {
    if(counter==20)return;
    counter += 1;
    setCounter(counter);
  };
  const subVal = () => {
    if(counter==0)return;
    counter -= 1;
    setCounter(counter);
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h2> counter value : {counter}</h2>
      <button onClick={addVal}>add value</button>
      <br />
      <br />
      <button onClick={subVal}>sub value</button>
      <br />
      <footer>{counter}</footer>
    </>
  );
}

export default App;
