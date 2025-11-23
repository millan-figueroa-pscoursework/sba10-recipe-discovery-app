import { useState, useEffect } from "react";

// key → the localstorage key name
// initialValue → used if nothing is saved yet
function useLocalStorage(key: string, initialValue: any) {
  // value starts as whatever is already saved or the initial value
  const [value, setValue] = useState(() => {
    try {
      // try to read a saved item
      const item = window.localStorage.getItem(key);

      // if something is stored, use it, otherwise use the initial value
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // if reading fails, just use the initial value
      return initialValue;
    }
  });

  // whenever value changes, save it back to localstorage
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }, [key, value]);

  // return the stored value and a way to update it
  return [value, setValue] as const;
}

export default useLocalStorage;
