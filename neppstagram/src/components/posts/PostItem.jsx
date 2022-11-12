import styled from "styled-components";
import PostImgBox from "./PostImgBox";
import PostUser from "./PostUser";

function PostItem() {
  return (
    <Block>
      <PostUser />
      <PostImgBox />
    </Block>
  );
}

const Block = styled.div``;

export default PostItem;
