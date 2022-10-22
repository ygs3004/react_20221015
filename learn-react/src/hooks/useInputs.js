import { useState, useCallback } from "react";

function useInputs(initialState) {
  const [inputs, setInputs] = useState(initialState);

  const handleInputs = useCallback((e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }, []);

  const reset = useCallback(() => setInputs(initialState), [initialState]);

  return [inputs, handleInputs, reset];
}

export default useInputs;
