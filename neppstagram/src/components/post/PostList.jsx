import { useEffect, useState } from "react";
import { getPost } from "../../api";
import PostItem from "./PostItem";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPost(1).then((res) => setPosts(res.data.data));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
