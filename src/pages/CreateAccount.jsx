import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateAccount.css";

export default function CreateAccount() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();

  const register = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <div className="create">
      <h2>Create Account</h2>
      <input placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPass(e.target.value)}
      />

      <button onClick={register}>Create Account</button>

      {/* FIXED */}
      <p onClick={() => navigate("/login")}>Back to Login</p>
    </div>
  );
}
