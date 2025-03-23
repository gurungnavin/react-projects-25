import { useEffect, useState } from "react";

export default function UseLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
    } catch(e) {
      console.log(e.message);
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}


// 1. Syncs state with localStorage.
// 2. Loads initial state from localStorage or default value.
// 3. Updates localStorage when state changes.
// 4. Returns state and its updater function.
