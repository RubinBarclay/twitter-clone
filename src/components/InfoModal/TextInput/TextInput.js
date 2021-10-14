import { useEffect, useRef, useState, useContext } from "react";
import UserInfoContext from "../../../userInfoContext";
import "./TextInput.css";

function TextInput({ type, placeholder }) {
  const [focused, setFocused] = useState(false);
  const { userInfo, setUserInfo } = useContext(UserInfoContext);
  const offClickRef = useRef();

  // Listener for when user clicks outside of component
  useEffect(() => {
    document.addEventListener("mousedown", () => setFocused(false));
    return () => {
      document.removeEventListener("mousedown", () => setFocused(false));
    };
  }, []);

  const setUserInfoHandler = (e) => {
    setUserInfo((currentInfo) => {
      if (type === "username") {
        return {
          ...currentInfo,
          username: e.target.value,
        };
      } else {
        return {
          ...currentInfo,
          displayName: e.target.value,
        };
      }
    });
  };

  return (
    <label htmlFor="text" ref={offClickRef} onClick={() => setFocused(true)}>
      <div
        className={`signUp__inputGroup ${
          focused && "signUp__inputGroup--focused"
        }`}
      >
        <span
          className={`signUp__inputGroup__placeholder ${
            focused || userInfo[type].length
              ? "signUp__inputGroup__placeholder--focused"
              : ""
          }`}
        >
          {placeholder}
        </span>
        {focused && (
          <span className="signUp__inputGroup__counter">
            {userInfo[type].length} / 20
          </span>
        )}
        <input
          type="text"
          id="text"
          maxLength="20"
          onChange={setUserInfoHandler}
        />
      </div>
    </label>
  );
}

export default TextInput;
