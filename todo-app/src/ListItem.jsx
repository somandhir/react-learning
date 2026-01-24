import React, {memo, useState } from "react";

const ListItem = memo(({ el, idx, handleDel, handleDone, handleEdit }) =>{
    console.log("list item rendered");
    
  const [isEditing, setIsEditing] = useState(false);
  const [editedVal, setEditedVal] = useState(el.content);

  let handleChange = (e) => {
    setEditedVal(e.target.value);
  };
  let handleSave = () => {
    if (!editedVal.trim()) return;
    handleEdit(editedVal, idx);
    setIsEditing(false);
  };
  return (
    <li key={idx}>
      {isEditing ? (
        <input
          type="text"
          value={editedVal}
          onChange={handleChange}
          onKeyDown={(e) => {
            e.key === "Enter" && handleSave();
          }}
        ></input>
      ) : el.strike ? (
        <s>{el.content}</s>
      ) : (
        el.content
      )}

      <div>
        <span style={{ cursor: "pointer" }} onClick={() => handleDone(idx)}>
          ✔️
        </span>{" "}
        <span style={{ cursor: "pointer" }} onClick={() => setIsEditing(true)}>
          📝
        </span>{" "}
        <span style={{ cursor: "pointer" }} onClick={() => handleDel(idx)}>
          ❌
        </span>{" "}
      </div>
    </li>
  );
})

export default ListItem;
