import React, { useState } from 'react';

const BlogCreatePost = () => {
  const [messageInput, setMessageInput] = useState('');
  const [renderMessage, setRenderMessage] = useState([]);

  const messageHandler = (event) => {
    setMessageInput(event.target.value);
  };

  const addMessage = () => {
    setRenderMessage([...renderMessage, messageInput]);
  };

  return (
    <div>
      <h1 className="newPostHeader">New Post</h1>
      <div className="createPostContainer">
        <label htmlFor="">Blog Title</label>
        <input type="text" placeholder="Enter a title" />
        <label htmlFor="">Blog Body</label>
        <input
          type="text"
          placeholder="Start writing here"
          onChange={messageHandler}
        />
        <button onClick={addMessage}>Submit</button>
        {renderMessage.map((message) => {
          return (
            <div>
              <li>{message}</li>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogCreatePost;
