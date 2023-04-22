// import LifeCycleClass from "./LifeCycleClass";
// import LifeCycleFunc from "./LifeCycleFunc";
// import Practice from "./RefSample";
// import Prac from "./RefSample";
// import RefSample1 from "./RefSample1";
// import RefSample2 from "./RefSample2";
// import RefSample3 from "./RefSample3";
// import RefSample4 from "./RefSample4";

// function App() {
//   return (
//     <div className="App">
//       {/* <RefSample1 /> */}
//       {/* <RefSample2 /> */}
//       {/* <RefSample3 /> */}
//       {/* <RefSample4 /> */}
//       {/* <br></br> <br></br> <br></br> */}
//       {/* <Practice /> */}
//       {/* <LifeCycleFunc /> */}
//       <LifeCycleClass />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import PostItem from "./PostItem";
import "./App.css";

const fakePosts = [
  { id: 1, title: "Fake Post 1", content: "Lorem ipsum dolor sit amet." },
  { id: 2, title: "Fake Post 2", content: "Consectetur adipiscing elit." },
  { id: 3, title: "Fake Post 3", content: "Sed do eiusmod tempor incididunt." },
  { id: 4, title: "Fake Post 4", content: "Sed do eiusmod tempor incididunt." },
  { id: 5, title: "Fake Post 5", content: "Sed do eiusmod tempor incididunt." },
  { id: 6, title: "Fake Post 6", content: "Sed do eiusmod tempor incididunt." },
  { id: 7, title: "Fake Post 7", content: "Sed do eiusmod tempor incididunt." },
  { id: 8, title: "Fake Post 8", content: "Sed do eiusmod tempor incididunt." },
];

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setPosts(fakePosts);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <h1>Post List</h1>
      {posts.length === 0 ? <p>Loading...</p> : <PostItem posts={posts} />}
    </div>
  );
}
