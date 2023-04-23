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

import axios from "axios";
//axios를 가져옵니다.
import React, { useState, useEffect } from "react";
//React, useState, useEffect를 가져옵니다.
import PostItem from "./PostItem";
//Postitem 컴포넌트를 가져옵니다.
import "./App.css";
//css를 가져옵니다.
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
  //posts 상태를 관리하는 useState 훅을 사용합니다. posts의 초기값은 빈 배열입니다.
  const [posts, setPosts] = useState([]);

  //useEffect 훅을 사용합니다.
  useEffect(() => {
    //CancelToken.source() 함수를 통해 CancelToken을 만들고,
    //CancelToken을 이용하여, 요청을 취소할 수 있습니다.
    const source = axios.CancelToken.source();
    //setTimeout 함수를 사용하여 2초 후에 axios로 데이터를 요청합니다.
    setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts", {
          cancelToken: source.token,
          timeout: 2000, // 대기 시간을 2초로 설정
        })
        .then((response) => {
          setPosts(response.data);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log("Request canceled by user");
          } else {
            console.log(error);
          }
        });
    }, 2000);
    return () => {
      source.cancel("Request canceled by cleanup");
    };
  }, []);

  return (
    <div className="App">
      <h1>Post List</h1>
      {posts.length === 0 ? <p>Loading...</p> : <PostItem posts={posts} />}
    </div>
  );
}
