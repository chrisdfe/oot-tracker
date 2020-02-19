import React, { useState, useEffect } from "react";

// https://dev.to/selbekk/persisting-your-react-state-in-9-lines-of-code-9go
function usePersistedState<T>(key: string, defaultValue: T) {
  const [state, setState] = useState(() => {
    let value;
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
