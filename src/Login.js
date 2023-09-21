import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate authentication logic, you can replace this with a real backend.
    if (username === "user" && password === "akash") {
        navigate("/todoList");
        
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div >
      <div className="headerlogin">
      <h2>LOGIN</h2>
      </div>
      <div className="loginbody">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="loginbutton" onClick={handleLogin}>Login</button>
      </div>
      
    </div>
  );
}

export default Login;
