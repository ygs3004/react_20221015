// 액션의 타입 정의
const ADD_COUNTER = "ADD_COUNTER";
const SUB_COUNTER = "SUB_COUNTER";

// 액션을 생성하는 함수
export const addCounter = () => ({ type: ADD_COUNTER });
export const subCounter = () => ({ type: SUB_COUNTER });

export default function counter(state = 0, action) {
  switch (action.type) {
    case "ADD_COUNTER":
      return state + 1;
    case "SUB_COUNTER":
      return state - 1;
    default:
      return state;
  }
}
