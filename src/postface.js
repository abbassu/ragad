import React, { useState } from "react";
import "./postface.css"; // Import your CSS file for styling

const PostComponent = (props) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = (e) => {
    e.preventDefault();
    const commentText = e.target.comment.value;
    if (commentText !== "") {
      setComments([...comments, commentText]);
      e.target.comment.value = "";
    }
  };

  return (
    <div className="post">
      <div className="user-info">
        <img src={props.item.image} alt="User" className="avatar" />
        <p className="username">John Doe</p>
      </div>
      <p className="post-message">{props.item.text}</p>
      <div className="post-actions">
        <button onClick={handleLike} className="like-btn">
          Like ({props.item.like})
        </button>
        <form onSubmit={handleComment} className="comment-form">
          <input
            type="text"
            name="comment"
            placeholder="Write a comment..."
            className="comment-input"
          />
          <button type="submit" className="comment-btn">
            Comment
          </button>
        </form>
      </div>
      <div className="comments">
        {comments.map((comment, index) => (
          <p key={index} className="comment">
            {comment}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PostComponent;
