import React, { useEffect, useRef, useState } from "react";
import "./Toast.css";
function Toast() {
  const [toastList, settoastList] = useState([]);
  const timeouts = useRef([]);
  let handleClose = (id) => {
    settoastList((prev) => {
      return prev.filter((el) => el.id !== id);
    });
  };
  let handleClick = (message, type, time = 5000) => {
    let id = Date.now();
    settoastList((prev) => {
      let nl = [...prev, { message, type, id }];
      return nl;
    });
    const timeoutId = setTimeout(() => {
      handleClose(id);
    }, time);
    timeouts.current.push(timeoutId);
  };
  useEffect(() => {
    return () => {
      timeouts.current.forEach((tid) => clearTimeout(tid));
    };
  }, []);

  return (
    <>
      <div className="toast-container">
        {toastList.map((el) => {
          return (
            <div className={`toast ${el.type}`} key={el.id}>
              {el.message} <span onClick={() => handleClose(el.id)}>X</span>
            </div>
          );
        })}
      </div>
      <div className="container">
        <button onClick={() => handleClick("Success", "success")}>
          success
        </button>
        <button onClick={() => handleClick("Info", "info")}>info</button>
        <button onClick={() => handleClick("Warning", "warning")}>
          warning
        </button>
        <button onClick={() => handleClick("Error", "error")}>error</button>
      </div>
    </>
  );
}

export default Toast;
