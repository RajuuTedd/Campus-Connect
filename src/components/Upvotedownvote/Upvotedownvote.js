import React, { useState } from "react";
import "./Upvotedownvote.css";

const UpvoteDownvote = () => {
  const [vote, setVote] = useState(0);

  return (
    <div className="vote-container">
      <span className="upvote" onClick={() => setVote(vote + 1)}>
        ⬆
      </span>
      <span className="vote-count">{vote}</span>
      <span className="downvote" onClick={() => setVote(vote - 1)}>
        ⬇
      </span>
    </div>
  );
};

export default UpvoteDownvote;
