import { useState } from "react";
import "./Comments.css";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  const addComment = () => {
    if (text.trim() === "") return;
    setComments([...comments, text]);
    setText("");
  };

  return (
    <div className="comments">
      <h3>Comments</h3>

      <div className="comment-input">
        <input
          placeholder="Add a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addComment}>Post</button>
      </div>

      <div className="comment-list">
        {comments.map((c, index) => (
          <p key={index}>{c}</p>
        ))}
      </div>
    </div>
  );
}
