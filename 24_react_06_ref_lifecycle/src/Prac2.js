import React, { useState, useEffect } from "react";
import PostList from "./PostItem";

const fakePosts = [
  { id: 1, title: "Fake Post 1", content: "Lorem ipsum dolor sit amet." },
  { id: 2, title: "Fake Post 2", content: "Consectetur adipiscing elit." },
  { id: 3, title: "Fake Post 3", content: "Sed do eiusmod tempor incididunt." },
];

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setPosts(fakePosts);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <h1>Post List</h1>
      {posts.length === 0 ? <p>Loading...</p> : <PostList posts={posts} />}
    </div>
  );
}
