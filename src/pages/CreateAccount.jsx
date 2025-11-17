import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import "./CreateAccount.css";

export default function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const { createAccount } = useAuth();
  const navigate = useNavigate();

  const register = () => {
    createAccount(email, password);
    alert("Account created successfully!");
    navigate("/Login");
  };

  return (
    <div className="create">
      <h2>Create Account</h2>

      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPass(e.target.value)}
      />

      <button onClick={register}>Create Account</button>
      <p onClick={() => navigate("/")}>Back to Login</p>
    </div>
  );
}
