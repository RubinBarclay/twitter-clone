import { createContext } from "react";

const UserInfoContext = createContext({
  userInfo: { username: "", displayName: "", verified: false },
  setUserInfo: () => {},
});

export default UserInfoContext;
