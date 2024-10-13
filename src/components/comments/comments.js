import React from "react";
import "./comments.css";

const Comments = () => {
  return (
    <div className="comments-section">
      <h3>Comments</h3>
      <div className="comment">
        <p>User1: This is an awesome post!</p>
      </div>
      <div className="comment">
        <p>User2: Thanks for sharing!</p>
      </div>
      <textarea placeholder="Add a comment..." />
      <button>Add Comment</button>
    </div>
  );
};
export default Comments;
