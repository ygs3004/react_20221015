import React, { useContext, useMemo } from "react";
import { UserDispatchContext } from "../App";

function countUser(arr) {
  // active가 true 유저만 세기 (배열 관련 함수 활용하기)
  console.log("유저 세는 중...");
  return arr.filter((user) => user.active).length;
}

function UserList({ userList }) {
  // 의존하는 값이 변할 때에만 연산을 한다.
  const userCount = useMemo(() => countUser(userList), [userList]);

  console.log("UserList render : %d", userCount);

  return (
    <div>
      <h2>유저 목록</h2>
      <ul>
        {userList.map((user) => (
          // props 통해서 User 컴포넌트에 값 전달해서 반영하기
          <User key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}

function User({ user }) {
  const dispatch = useContext(UserDispatchContext);

  const { name, age, id, active } = user;
  return (
    <li>
      <span
        style={{ color: active && "blue", cursor: "pointer" }}
        onClick={() => dispatch({ type: "TOGGLE_USER", id })}
      >
        {name}({age}세)
      </span>
      <button
        onClick={() => {
          // 이벤트 전파(버블링)를 막는다.
          // e.stopPropagation();
          dispatch({ type: "REMOVE_USER", id });
        }}
      >
        삭제
      </button>
    </li>
  );
}

export default React.memo(UserList);
