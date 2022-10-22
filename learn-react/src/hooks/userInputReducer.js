// useReducer 사용한 inputs 관리하는 커스텀 훅 만들어보기
import { useReducer, useCallback } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE":
      return { ...state, [action.name]: action.value };
    case "RESET":
      return action.initialState;
    default:
      return state;
  }
}

function useInputReducer(initialState) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInput = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE", name, value });
  }, []);

  const reset = useCallback(() => {
    dispatch({ type: "RESET", initialState });
  }, [initialState]);

  return [state, handleInput, reset];
}

export default useInputReducer;
