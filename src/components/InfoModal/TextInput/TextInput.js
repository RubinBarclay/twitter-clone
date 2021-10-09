import { useState } from "react";
import "./TextInput.css";

function TextInput() {
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");

  const [focused, setFocused] = useState("");

  const focusInput = (field) => {
    switch (field) {
      case "username":
      case "displayName":
        setFocused("active");
    }
  };
  return (
    <label htmlFor="username" onClick={() => setFocused("active")}>
      <div className={`signUp__inputGroup signUp__inputGroup--${focused}`}>
        <span
          className={`signUp__inputGroup__placeholder signUp__inputGroup__placeholder--${focused}`}
        >
          Username
        </span>
        <span className="signUp__inputGroup__counter">
          {username.length} / 20
        </span>
        <input
          type="text"
          id="username"
          maxlength="20"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
    </label>
  );
}

export default TextInput;
