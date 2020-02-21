import usePersistedState from "./usePersistedState";

function usePersistedStringArray(
  key: string,
  defaultValue: string[]
): [
  string[],
  React.Dispatch<React.SetStateAction<string[]>>,
  (targetValue: string) => void
] {
  const [value, setValue] = usePersistedState<string[]>(key, defaultValue);

  const addValue = (newElement: string) => {
    setValue([...value, newElement]);
  };

  const removeValue = (elementToRemove: string) => {
    const filteredValue = value.filter(
      (currentValue: string) => currentValue !== elementToRemove
    );
    setValue(filteredValue);
  };

  const toggleValue = (targetValue: string) => {
    if (value.includes(targetValue)) {
      removeValue(targetValue);
    } else {
      addValue(targetValue);
    }
  };

  return [value, setValue, toggleValue];
}

export default usePersistedStringArray;
