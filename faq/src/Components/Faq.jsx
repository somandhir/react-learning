import React, { useState } from "react";
import "./Faq.css";
import data from "../faq.json";
function Faq() {
  const arr = data.faqs;

  return (
    <div className="main">
      <h1>FAQ's</h1>
      {arr.map((el, idx) => {
        const [show, setShow] = useState(false);
        return (
          <div key={idx} className="container">
            <h3>
              {el.question}{" "}
              <span onClick={() => setShow(!show)}>{show ? "-" : "+"}</span>
            </h3>
            {show && <p>{el.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}

export default Faq;
