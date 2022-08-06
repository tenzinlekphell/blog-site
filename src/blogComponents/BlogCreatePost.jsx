import React from 'react';

const BlogCreatePost = () => {
  return (
    <div>
      <h1 className="newPostHeader">New Post</h1>
      <div className="createPostContainer">
        <label htmlFor="">Blog Title</label>
        <input type="text" placeholder="Enter a title" />
        <label htmlFor="">Blog Body</label>
        <input type="text" placeholder="Start writing here" />
        <button>Submit</button>
      </div>
    </div>
  );
};

export default BlogCreatePost;
