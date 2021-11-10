import { useContext, useState } from "react";
import { Box, Button, FormControlLabel, Checkbox } from "@material-ui/core";
import TextInput from "./TextInput/TextInput";
import "./InfoModal.css";
import UserInfoContext from "../../userInfoContext";

function InfoModal({ setShowModal }) {
  const { userInfo, setUserInfo } = useContext(UserInfoContext);
  const [usernameInvalid, setUsernameInvalid] = useState(false);
  const [displayNameInvalid, setDisplayNameInvalid] = useState(false);

  const isDisabled = () => {
    return userInfo.username === "" || userInfo.displayName === "";
  };

  const validateForm = () => {
    if (!isDisabled()) {
      setShowModal(false);
    } else {
      // Mark required invalid fields if empty
      setUsernameInvalid(!userInfo.username);
      setDisplayNameInvalid(!userInfo.displayName);
    }
  };

  return (
    <div className="infoModal">
      <div className="infoModal__wrapper">
        <h2 className="infoModal__heading">Create a temporary user</h2>
        <form className="infoModal__form">
          <TextInput
            type="username"
            placeholder="Username"
            invalid={usernameInvalid}
          />
          <TextInput
            type="displayName"
            placeholder="Display name"
            invalid={displayNameInvalid}
          />
          <TextInput type="avatar" placeholder="Optional: avatar image url" />
          <FormControlLabel
            labelPlacement="start"
            label={<Box sx={{ fontWeight: "bold" }}>Verified?</Box>}
            className="infoModal__verifiedWrapper"
            control={
              <Checkbox
                className="infoModal__verifiedCheckbox"
                onChange={() =>
                  setUserInfo((currentInfo) => ({
                    ...currentInfo,
                    verified: !currentInfo.verified,
                  }))
                }
              />
            }
          />
          <Button
            variant="outlined"
            className="infoModal__submit"
            fullWidth
            onClick={validateForm}
          >
            Start Tweeting!
          </Button>
        </form>
      </div>
    </div>
  );
}

export default InfoModal;
