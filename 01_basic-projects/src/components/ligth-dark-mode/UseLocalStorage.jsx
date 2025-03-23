import { useEffect, useState } from "react";

export default function UseLocalStorage(key, defaultValue) {
/* 🔑 So, what does it actually do?
   ●　It tries to get a value from localStorage using a key.
   ●　If the value exists and is valid, it uses that value.
   ●　If the value doesn't exist or is corrupted, it uses the defaultValue instead.
*/
  const [value, setValue] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
    } catch(e) {
      console.log(e.message);
      return defaultValue;
    }
  });

  /* 
   ●　When value changes, this useEffect updates the existing key with the new value in localStorage.
   ●　If you change key, a new entry will be created in localStorage.
  */

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  
// now return the new updated value
  return [value, setValue];
}


// 1. Syncs state with localStorage.
// 2. Loads initial state from localStorage or default value.
// 3. Updates localStorage when state changes.
// 4. Returns state and its updater function.
