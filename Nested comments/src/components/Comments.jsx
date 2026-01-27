import React, { useState } from "react";
import PostComment from "./PostComment";

export default function Comment({ id, comments, handlePostReply , handleDel}) {
  const comment = comments[id];
  if(!comment)return;
  const [isPosting, setIsPosting] = useState(false);
  const handlePosting = () => {
    setIsPosting((prev) => !prev);
  };
 
  
  return (
    <>
      <div className="comment-container">
        <p>{comment.content}</p>
        <button className="post-btn" onClick={handlePosting}>
          {isPosting? "cancel":"reply"}
        </button>
        <button className="del-btn" onClick={()=>handleDel(id)} >delete</button>
      </div>
      {
        isPosting && <PostComment id={id} handlePostReply={handlePostReply} setIsPosting={setIsPosting}  />
      }
      <div>
        {comment.children.map((childId) => (
          <Comment key={childId} id={childId} comments={comments} handlePostReply={handlePostReply} handleDel={handleDel}  />
        ))}
      </div>
    </>
  );
}
