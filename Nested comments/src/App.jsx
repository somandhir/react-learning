import React, { useState } from "react";
import Comments from "./components/Comments";
import data from "./data.json";

const App = () => {
  const [comments, setComments] = useState(data);

  const handlePostReply = (id, content) => {
    if (!content.trim()) {
      return;
    }
    const _id = Date.now().toString();
    setComments((prev) => ({
      ...prev,
      [_id]: {
        id: _id,
        content,
        children: [],
        parent: id,
      },
      [id]: {
        ...prev[id],
        children: [...prev[id].children, _id],
      },
    }));
  };
  const handleDel = (id) => {
    setComments((prev) => {
      const parentId = prev[id]?.parent;
      if (!parentId) return prev;

      const newComments = { ...prev };

      // remove id from parent's children
      newComments[parentId] = {
        ...newComments[parentId],
        children: newComments[parentId].children.filter(
          (childId) => childId !== id,
        ),
      };

      const queue = [id];

      while (queue.length > 0) {
        const nodeToDel = queue.shift();

        if (!newComments[nodeToDel]) continue;

        queue.push(...newComments[nodeToDel].children);
        delete newComments[nodeToDel];
      }

      return newComments;
    });
  };
  return (
    <div>
      <Comments
        id="1"
        comments={comments}
        handlePostReply={handlePostReply}
        handleDel={handleDel}
      />
    </div>
  );
};

export default App;
