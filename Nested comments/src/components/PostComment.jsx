import React, { useEffect, useRef, useState } from "react";

function PostComment({ id, handlePostReply, setIsPosting }) {
  const [comment, setComment] = useState("");
  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div>
      <div className="post-box">
        <input
          ref={inputRef}
          type="text"
          value={comment}
          onChange={(e) => handleChange(e)}
          placeholder="write your reply here"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handlePostReply(id, comment);
              setIsPosting(false);
            }
          }}
        />
        <button
          className="post"
          onClick={() => {
            handlePostReply(id, comment);
            setIsPosting(false);
          }}
        >
          post
        </button>
      </div>
    </div>
  );
}

export default PostComment;
