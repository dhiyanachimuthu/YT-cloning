import { createContext, useState, useContext } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const loginEmail = (email, password) => {
    if (email && password) setUser({ email });
  };

  const googleLogin = () => {
    setUser({ email: "google-user@gmail.com" });
  };

  const createAccount = (email, password) => {
    setUser({ email });
  };

  return (
    <AuthContext.Provider value={{ user, loginEmail, googleLogin, createAccount }}>
      {children}
    </AuthContext.Provider>
  );
}
