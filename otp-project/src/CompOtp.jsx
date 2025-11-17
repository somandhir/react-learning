import React, { useEffect, useRef, useState } from "react";

function CompOtp({ otpLength = 6 }) {
  const [otpArr, setOtpArr] = useState(new Array(otpLength).fill(""));
  const ref = useRef([]);
  useEffect(() => {
    ref.current[0].focus();
  }, []);

  let handleKeyDown = (e, idx) => {
    if (e.key === "Backspace") {
      setOtpArr((prev) =>
        prev.map((el, tidx) => {
          if (tidx === idx) return "";
          else return el;
        })
      );
      if (idx - 1 >= 0) {
        ref.current[idx - 1].focus();
      }
    } else if (e.key === "ArrowLeft") {
      if (idx - 1 >= 0) {
        ref.current[idx - 1].focus();
      }
    } else if (e.key === "ArrowRight") {
      if (idx + 1 < otpLength) {
        ref.current[idx + 1].focus();
      }
    }
    return;
  };
  let handleChange = (e, idx) => {
    let val = e.target.value;
    if (val && isNaN(val)) return;

    if (val.length > 1) {
      let i = idx;
      let copy = [...otpArr];
      for (let j = 0; j < val.length; j++) {
        if (i >= otpArr.length) break;
        copy[i++] = val[j];
      }
      setOtpArr(copy);
      i = Math.min(i, otpArr.length - 1);
      ref.current[i].focus();
    } else {
      if (!val) {
        return;
      }
      setOtpArr((prev) =>
        prev.map((el, tidx) => {
          if (tidx === idx) return val;
          else return el;
        })
      );
      if (idx + 1 < otpLength) ref.current[idx + 1].focus();
    }
  };
  return (
    <>
      {otpArr.map((el, idx) => {
        return (
          <input
            key={idx}
            value={el}
            className="input-box"
            ref={(currentInput) => (ref.current[idx] = currentInput)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            onChange={(e) => handleChange(e, idx)}
          ></input>
        );
      })}
    </>
  );
}

export default CompOtp;
