import React, { useState } from "react";
import "./FileExplorer.css";

function FileExplorer({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  let handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="container">
      <h4 onClick={handleClick}>
        {" "}
        <span>
          {data?.type === "folder" ? (isOpen ? "📂" : "📁") : "📝"}
        </span>{" "}
        {data?.name}
      </h4>
      {isOpen &&
        data?.type === "folder" &&
        data?.children?.map((el, idx) => {
          return <FileExplorer key={idx} data={el} />;
        })}
    </div>
  );
}

export default FileExplorer;
