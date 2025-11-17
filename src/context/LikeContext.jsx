import { createContext, useContext, useState } from "react";

const LikeContext = createContext();
export const useLikes = () => useContext(LikeContext);

export function LikeProvider({ children }) {
  const [liked, setLiked] = useState([]);

  const toggleLike = (video) => {
    setLiked((prev) =>
      prev.some((v) => v.id === video.id)
        ? prev.filter((v) => v.id !== video.id)
        : [...prev, video]
    );
  };

  return (
    <LikeContext.Provider value={{ liked, toggleLike }}>
      {children}
    </LikeContext.Provider>
  );
}
