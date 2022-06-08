import React, { useEffect, useState } from "react";

// Use functional or class component based on your preference.
// Make it a default export.

export default function LoginForm() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    
  }
  useEffect(() => {
    if (username.length > 0 && password.length > 0) setIsDisabled(false)
  }, [username, password])

  return (
    <div>
      <input id="username-input" type="text" onChange={(e) => setUsername(e.target.value)} />
      <input id="password-input" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button id="login-button" disabled={isDisabled} onClick={onSubmit} >Submit</button>
    </div>
  );
}