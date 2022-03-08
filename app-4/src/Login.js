import React, { useState } from "react";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const alertUser = () => {
    alert(`username: ${userName} password: ${password}`);
  };
  return (
    <div>
      <input type="text" onChange={(e) => setUserName(e.target.value)} />
      <input type="text" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={alertUser}>Login</button>
    </div>
  );
}
