import { createContext } from "react";

const UserInfoContext = createContext({
  username: "",
  // userInfo: { username: "", displayName: "", verified: false },
  setUserInfo: () => {},
});

export default UserInfoContext;
