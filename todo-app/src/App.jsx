import React, { useCallback, useEffect, useState } from "react";
import ListItem from "./ListItem";

function App() {
  console.log("todo app rendered");

  const [text, setText] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || [],
  );

  let handleClick = () => {
    if (!text.trim()) return;
    setTodos((prev) => [...prev, { content: text, strike: false }]);
    setText("");
  };
  let handleDone = useCallback((idx) => {
    setTodos((prev) =>
      prev.map((todo, i) =>
        i === idx ? { ...todo, strike: !todo.strike } : todo,
      ),
    );
  }, []);
  let handleDel = useCallback((idx) => {
    setTodos((prev) => prev.filter((_, i) => i !== idx));
  }, []);
  let handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  let handleEdit = useCallback((editedText, got_idx) => {
    setTodos((prev) => {
      return prev.map((el, idx) =>
        idx === got_idx ? { ...el, content: editedText } : el,
      );
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
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
                <ListItem
                  key={idx}
                  el={el}
                  idx={idx}
                  handleDel={handleDel}
                  handleDone={handleDone}
                  handleEdit={handleEdit}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
