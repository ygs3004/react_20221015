import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { getPost } from "../../api";

function Post() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Post;
