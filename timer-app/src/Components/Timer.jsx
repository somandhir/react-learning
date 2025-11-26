import React, { useEffect, useRef, useState } from "react";
import "./Timer.css";

function Timer() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hrs, setHrs] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef();
  let handleHrs = (val) => {
    val = Number(val);
    if (isNaN(val)) return;
    setHrs(val);
  };
  let handleMin = (val) => {
    val = Number(val);
    if (isNaN(val)) return;
    if (val <= 59) {
      setMin(val);
    } else {
      setMin(val % 60);
      setHrs((prev) => {
        let nh = prev + Math.floor(val / 60);
        return nh;
      });
    }
  };
  let handeSec = (val) => {
    val = Number(val);
    if (isNaN(val)) return;
    if (val <= 59) {
      setSec(val);
    } else {
      setSec(val % 60);
      let new_min = min + Math.floor(val / 60);
      setMin(new_min % 60);
      setHrs((prev) => prev + Math.floor(new_min / 60));
    }
  };
  let handleStart = () => {
    let time = hrs * 60 * 60 + min * 60 + sec;
    if (time === 0) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      time--;
      setSec((pr) => {
        if (pr === 0) {
          setMin((mpr) => {
            if (mpr === 0) {
              setHrs((hpr) => hpr - 1);
              return 59;
            } else {
              return mpr - 1;
            }
          });
          return 59;
        } else {
          return pr - 1;
        }
      });
      if (time === 0) {
        setMin(0);
        setHrs(0);
        setSec(0);
        clearInterval(intervalRef.current);
        setIsRunning(false);
      }
    }, 1000);
  };
  return (
    <div className="container">
      <div className="inputs">
        <input
          type="text"
          value={hrs}
          disabled={isRunning}
          onFocus={() => {
            if (hrs === 0) setHrs("");
          }}
          onChange={(e) => handleHrs(e.target.value)}
        />
        <p>:</p>
        <input
          type="text"
          value={min}
          disabled={isRunning}
          onFocus={() => {
            if (min === 0) setMin("");
          }}
          onChange={(e) => {
            handleMin(e.target.value);
          }}
        />
        <p>:</p>
        <input
          type="text"
          value={sec}
          disabled={isRunning}
          onFocus={() => {
            if (sec === 0) setSec("");
          }}
          onChange={(e) => handeSec(e.target.value)}
        />
      </div>
      <div className="buttons">
        <button onClick={handleStart} disabled={isRunning}>
          start
        </button>
        <button
          onClick={() => {
            if (!intervalRef.current) return;
            setIsRunning(false);
            setHrs(0);
            setMin(0);
            setSec(0);
            clearInterval(intervalRef.current);
          }}
        >
          reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
