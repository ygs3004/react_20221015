import { createContext, useContext, useReducer, useRef } from "react";

export const TODO_TYPES = {
  CREATE_TODO: "CREATE_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
};

Object.freeze(TODO_TYPES); // 객체 동결

const initialTodoState = [
  {
    id: 1,
    text: "컴포넌트 만들기",
    done: true,
  },
  {
    id: 2,
    text: "기능 구현하기",
    done: false,
  },
  {
    id: 3,
    text: "todo 리팩토링",
    done: false,
  },
];

function reducer(state, action) {
  switch (action.type) {
    case TODO_TYPES.CREATE_TODO:
      return state.concat({ id: action.id, text: action.text, done: false });

    case TODO_TYPES.TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );

    case TODO_TYPES.REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);

    default:
      return state;
  }
}

export const TodoStateContext = createContext(null);
export const TodoDisPatchContext = createContext(null);

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialTodoState);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDisPatchContext.Provider value={dispatch}>
        {children}
      </TodoDisPatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

function useTodoReducer() {
  const [todos, dispatch] = useReducer(reducer, initialTodoState);

  return [todos, dispatch];
}

export function useTodoState() {
  return useContext(TodoStateContext);
}
export function useTodoDispatch() {
  return useContext(TodoDisPatchContext);
}

export default useTodoReducer;
