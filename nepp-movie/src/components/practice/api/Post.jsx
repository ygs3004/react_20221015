import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import useAsync from "./useAsync";

function Post() {
  const [title, setTitle] = useState("");
  const [state, fetchData] = useAsync(async () => {
    return axios.get("http://localhost:8000/posts");
  });

  const onSubmit = async () => {
    let result = await axios.post("http://localhost:8000/posts", {
      title,
    });
    fetchData();
  };

  const onDelete = async (id) => {
    let result = await axios.delete("http://localhost:8000/posts/" + id);

    fetchData();
  };

  const { loading, data: postList, error } = state;

  if (loading) return <div>로딩 중.....</div>;
  if (error) return <div> 에러 발생 </div>;

  return (
    <div>
      <h3>PracticeAPI</h3>
      {/* <input type="number" onChange={(e) => setId(e.targe.value)} /> */}
      <input
        type="text"
        onChange={({ target: { value } }) => setTitle(value)}
      />
      <button onClick={onSubmit}>등록</button>
      {postList?.map((post) => (
        <li key={post.id}>
          {post.title}
          <button onClick={() => onDelete(post.id)}>삭제</button>
        </li>
      ))}
    </div>
  );
}

export default Post;
