import { createContext, useContext, useState } from "react";

const SavedContext = createContext();
export const useSaved = () => useContext(SavedContext);

export function SavedProvider({ children }) {
  const [saved, setSaved] = useState([]);

  const toggleSave = (video) => {
    setSaved((prev) =>
      prev.some((v) => v.id === video.id)
        ? prev.filter((v) => v.id !== video.id)
        : [...prev, video]
    );
  };

  return (
    <SavedContext.Provider value={{ saved, toggleSave }}>
      {children}
    </SavedContext.Provider>
  );
}
