import React, { useEffect, useState } from "react";

// Use functional or class component based on your preference.
// Make it a default export.

export default function LoginForm({ onSubmit }) {
    const [isDisabled, setIsDisabled] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onHandlerSubmit = () => {
        onSubmit(username, password)
    }
    useEffect(() => {
        if (username.length > 0 && password.length > 0) setIsDisabled(false)
    }, [username, password])
    
    return (
        <div>
            <input name="username" onChange={(e) => setUsername(e.target.value)} type="text" />
            <input name="password" onChange={(e) => setPassword(e.target.value)} type="password" />
            <button disabled={isDisabled} onClick={onHandlerSubmit} >Submit</button>
        </div>
    );
}