import { useState, useEffect } from "react";

// https://dev.to/selbekk/persisting-your-react-state-in-9-lines-of-code-9go
function usePersistedState<T>(
  key: string,
  defaultValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    let value: T;
    try {
      value = JSON.parse(localStorage.getItem(key) || "");
    } catch (e) {
      value = defaultValue;
    }
    return value;
  });

  useEffect(() => {
    const value = JSON.stringify(state);
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
