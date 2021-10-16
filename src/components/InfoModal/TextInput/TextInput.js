import { useEffect, useRef, useState, useContext } from "react";
import UserInfoContext from "../../../userInfoContext";
import "./TextInput.css";

function TextInput({ type, placeholder, invalid }) {
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
      switch (type) {
        case "username":
          return {
            ...currentInfo,
            username: e.target.value,
          };
        case "displayName":
          return {
            ...currentInfo,
            displayName: e.target.value,
          };
        case "avatar":
          return {
            ...currentInfo,
            avatar: e.target.value,
          };
        default:
          throw new Error("Unrecognised userInfo key");
      }
    });
  };

  return (
    <label htmlFor="text" ref={offClickRef} onClick={() => setFocused(true)}>
      <div
        className={`signUp__inputGroup ${
          focused
            ? "signUp__inputGroup--focused"
            : invalid
            ? "signUp__inputGroup--invalid"
            : ""
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
        {/* Only show the character count for username and displayName */}
        {focused && type !== "avatar" && (
          <span className="signUp__inputGroup__counter">
            {userInfo[type].length} / 20
          </span>
        )}
        <input
          type="text"
          id="text"
          maxLength={type !== "avatar" ? "20" : null}
          onChange={setUserInfoHandler}
        />
      </div>
    </label>
  );
}

export default TextInput;
