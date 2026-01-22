import React, { useState } from "react";

function Tabs() {
  let tabsArr = ["t1", "t2", "t3", "t4"];
  const [displayContent,setDisplayContent] = useState("");
  let handleClick = (content)=>{
    setDisplayContent(content);
  }
  return (
    <>
      <div className="full-container">
        <div className="container">
          {tabsArr.map((el, idx) => {
            return (
              <button className="tab-btn" key={idx} onClick={()=>handleClick(el)}>
                {el}
              </button>
            );
          })}
          <div className="box">
            {displayContent} content
          </div>
        </div>
      </div>
    </>
  );
}

export default Tabs;
