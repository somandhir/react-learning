import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([
    { content: "Learn html", strike: false },
    { content: "Learn CSS", strike: false },
  ]);

  let handleClick = () => {
    if (text === "") return;
    setTodos((prev) => [...prev, { content: text, strike: false }]);
    setText("");
  };
  let handleDone = (idx) => {
    setTodos((prev) =>
      prev.map((todo, i) =>
        i === idx ? { ...todo, strike: !todo.strike } : todo,
      ),
    );
  };
  let handleDel = (idx) => {
    setTodos((prev) => prev.filter((_, i) => i !== idx));
  };
  let handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  return (
    <>
      <div className="container">
        <div className="adding-container">
          <input
            value={text}
            type="text"
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleClick}>Add</button>
        </div>
        <div className="list">
          <ul>
            {todos.map((el, idx) => {
              return (
                <li key={idx}>
                  {el.strike ? <s>{el.content}</s> : el.content}
                  <div>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDone(idx)}
                  >
                    ✔️
                  </span>{" "}
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDel(idx)}
                  >
                    ❌
                  </span>{" "}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
