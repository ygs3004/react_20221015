import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { getCookie } from "../../../utils/cookie";
import styled from "styled-components";
import { BiHeart } from "react-icons/bi";

const token = getCookie("access-token");

function Post() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios
      .get("http://101.101.218.43/posts/all/1", {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        setPostList(res.data.data);
      });
  }, []);
  return (
    <PostListBlock>
      <h3>Practice API</h3>
      <ul>
        {postList.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </PostListBlock>
  );
}

const PostListBlock = styled.div`
  display: flex;
  justify-content: center;
  ul {
    border: 1px solid #000;
  }
`;

function PostItem({ post }) {
  const { body, img_urls, like_count } = post;
  console.log(post);
  return (
    <PostItemBlock>
      <ImgBox>
        {img_urls.map((url) => (
          <img src={url} alt="asd" />
        ))}
      </ImgBox>
      <BodyBlock>{body}</BodyBlock>
      <div>
        <BiHeart size={20} />
        {like_count}
      </div>
    </PostItemBlock>
  );
}

const PostItemBlock = styled.li`
  padding: 0 5px;
  border-bottom: 1px solid #000;
`;

const BodyBlock = styled.p`
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 12px;
`;

const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  overflow: hidden;
  img {
    width: 120%;
  }
`;

export default Post;
