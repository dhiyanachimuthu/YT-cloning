import { useState } from "react";
import { useNavigate } from "react-router-dom";
import googleLoginImg from "../assets/assets/g-logo.webp";
import "./Login.css";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();

  const handleEmailLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

      if (!email.endsWith("@gmail.com")) {
    alert("Email must be a valid Gmail address!");
    return;
  }

    alert("Logged in successfully!");
    onLogin(); 
  };

  return (
    <div className="login">
      <h2>
        <img className="g-login-top" src={googleLoginImg} />
        <br /> Log In
      </h2>

      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPass(e.target.value)}
      />

      <button onClick={handleEmailLogin}>Login</button>

      <div className="google-btn">
        <img src={googleLoginImg} />
        <span>Continue with Google</span>
      </div>

      <div className="abc">
        <p onClick={() => navigate("/create-account")}>
          Click <span className="crr">Create Account</span> to add another
          account
        </p>
      </div>
    </div>
  );
}
