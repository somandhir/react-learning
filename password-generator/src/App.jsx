import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("temp");
  const [length, setLength] = useState(8);
  const [na, setNa] = useState(false);
  const [ca, setCa] = useState(false);
  const passRef = useRef(null);

  // Instead of Math.random(), crypto.getRandomValues() for better security
  const fn = () => {
    let pass = "";
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (na) charset += "0123456789";
    if (ca) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    const array = new Uint8Array(length);
    crypto.getRandomValues(array);

    for (let i = 0; i < length; i++) {
      pass += charset[array[i] % charset.length];
    }
    setPassword(pass);
  };
  const passGenerator = useCallback(fn, [length, na, ca, setPassword]); // just for memoization

  useEffect(() => {
    passGenerator();
  }, [length, na, ca, passGenerator]);

  return (
    <>
      <div className="w-full h-screen bg-black flex flex-col items-center border-none">
        <h1 className="text-white text-4xl my-8 ">Password Generator</h1>
        <div className="w-140  bg-gray-700 rounded-2xl h-auto border-none shadow shadow-blue-100">
          <div className="flex  rounded-lg overflow-hidden my-2.5 border-none ">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3 mx-2 rounded-lg my-2 bg-white"
              placeholder="password"
              readOnly
              ref={passRef}
            ></input>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg my-2 mx-2 cursor-pointer"
              onClick={() => {
                passRef.current?.select();
                window.navigator.clipboard.writeText(password);
              }}
            >
              Copy
            </button>
          </div>
          <div className="flex text-sm gap-x-2  my-2.5 border-none">
            <input
              type="range"
              min="6"
              max="18"
              value={length}
              step="1"
              className="cursor-pointer w-22 mx-2 bg-gray-300 accent-blue-500 hover:accent-blue-700  "
              onChange={(e) => {
                setLength(e.target.value);
              }}
            ></input>
            <label className="w-20 inline-block">Length: {length}</label>

            <input
              type="checkbox"
              defaultChecked={na}
              className="cursor-pointer  mx-2 bg-gray-300 accent-blue-500 hover:accent-blue-700  "
              onChange={(e) => {
                setNa(!na);
              }}
            ></input>
            <label>Numbers Allowed</label>

            <input
              type="checkbox"
              defaultChecked={ca}
              className="cursor-pointer  mx-2 bg-gray-300 accent-blue-500 hover:accent-blue-700  "
              onChange={(e) => {
                setCa(!ca);
              }}
            ></input>
            <label>Characters Allowed</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
