import { useEffect, useRef, useState } from "react";
import "./TextInput.css";

function TextInput({ text, setText, placeholder }) {
  const [focused, setFocused] = useState(false);
  const offClickRef = useRef();

  const focusInput = (field) => {
    switch (field) {
      case "text":
      case "displayName":
        setFocused("active");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", () => setFocused(false));
    return () => {
      document.removeEventListener("mousedown", () => setFocused(false));
    };
  }, []);

  return (
    <label htmlFor="text" ref={offClickRef} onClick={() => focusInput("text")}>
      <div
        className={`signUp__inputGroup ${
          focused && "signUp__inputGroup--focused"
        }`}
      >
        <span
          className={`signUp__inputGroup__placeholder ${
            focused || text.length
              ? "signUp__inputGroup__placeholder--focused"
              : ""
          }`}
        >
          {placeholder}
        </span>
        {focused && (
          <span className="signUp__inputGroup__counter">
            {text.length} / 20
          </span>
        )}
        <input
          type="text"
          id="text"
          maxlength="20"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </label>
  );
}

export default TextInput;
