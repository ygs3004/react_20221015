import styled from "styled-components";
import PostImgBox from "./PostImgBox";
import PostUser from "./PostUser";

function PostItem({ post }) {
  console.log(post);
  return (
    <Block>
      <PostUser />
      <PostImgBox imgUrls={post.img_urls} />
      <ContentBox>{post.body}</ContentBox>
    </Block>
  );
}

const Block = styled.div`
  & + & {
    border-top: 1px solid #bbb;
  }
`;

const ContentBox = styled.div`
  padding: 5px;
  font-size: 0.7rem;
`;

export default PostItem;
