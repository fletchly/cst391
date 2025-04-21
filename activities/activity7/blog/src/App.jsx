import { useState } from "react";
import Post from "./Post.jsx";
import AddPost from "./AddPost.jsx";

function App() {
  const [postList, setPostList] = useState([
    {
      postNumber: 0,
      text: "The quick brown fox jumps over the lazy dog",
    },
    {
      postNumber: 1,
      text: "The quick brown fox jumps over the lazier dog",
    },
    {
      postNumber: 2,
      text: "The quick brown fox jumps over the laziest dog",
    },
  ]);

  const [postId, setPostId] = useState(postList.length);

  const handleAddPost = (newText) => {
    let newPost = {
      postNumber: postId,
      text: newText,
    };
    setPostList((postList) => [...postList, newPost]);
    setPostId(postId + 1);
  };

  const handleDeletePost = (id) => {
    let updatedPostList = postList.filter((post) => post.postNumber !== id);

    setPostList(updatedPostList);
  };

  const posts = postList.map((post) => (
    <Post
      key={post.postNumber}
      text={post.text}
      id={post.postNumber}
      onDelete={handleDeletePost}
    />
  ));

  return (
    <>
      {posts}
      <AddPost onAdd={handleAddPost} />
    </>
  );
}

export default App;
