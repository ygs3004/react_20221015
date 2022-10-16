import { useState, useRef } from "react";
import AddUser from "./AddUser";
function UserList() {
  const [userList, setUserList] = useState([
    {
      id: 1,
      name: "이름1",
      age: 34,
      active: true,
    },
    {
      id: 2,
      name: "변경2",
      age: 31,
      active: false,
    },
    {
      id: 3,
      name: "변경3",
      age: 35,
      active: false,
    },
  ]);

  // useRef로 값을 관리하면 값이 변경되어도 리렌더링이 일어나지 않는다.
  //  => 특정 값을 기억해놓고 사용한다(렌더링과 상관없이 변경 가능한 값).
  const nextId = useRef(4);

  const onCreate = (inputs) => {
    const { name, age } = inputs;
    setUserList(
      // Array.prototype.concat : 인자로 전달된 배열 혹은 원소를 합쳐서 새로운 배열 반환
      userList.concat({
        id: nextId.current,
        name,
        age,
      })
    );

    nextId.current++;
  };

  const onRemove = (id) => {
    // window.confirm : 확인 버튼 클릭시 true 반환
    const ok = window.confirm("정말 삭제하시겠습니까?");
    if (ok) setUserList(userList.filter((user) => user.id != id));
  };

  const onToggle = (id) => {
    setUserList(
      userList.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <div>
      <AddUser onCreate={onCreate} onRemove={onRemove} />
      <h2>유저목록</h2>
      <ul>
        {userList.map((user) => (
          // props 통해서 user에 값 전달해서 반영하기
          <User
            key={user.id}
            user={user}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
}

function User({ user, onRemove, onToggle }) {
  const { id, name, age, active } = user;

  return (
    <div>
      <li>
        <span
          style={{ color: active && "blue", cursor: "pointer" }}
          onClick={() => onToggle(id)}
        >
          {name}({age}세)
        </span>
        <button
          onClick={(e) => {
            // 이벤트 전파(버블링을 막는다.)
            // e.stopPropagation();
            onRemove(id);
          }}
        >
          삭제
        </button>
      </li>
    </div>
  );
}

export default UserList;
