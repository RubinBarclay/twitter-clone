import { useContext, useEffect } from "react";
import { Box, Button, FormControlLabel, Checkbox } from "@material-ui/core";
import TextInput from "./TextInput/TextInput";
import "./InfoModal.css";
import UserInfoContext from "../../userInfoContext";

function InfoModal({ setShowModal }) {
  const { userInfo, setUserInfo } = useContext(UserInfoContext);

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);
  return (
    <div className="infoModal">
      <div className="infoModal__wrapper">
        <h2 className="infoModal__heading">Create a temporary user</h2>
        <form className="infoModal__form">
          <TextInput type="username" placeholder="Username" />
          <TextInput type="displayName" placeholder="Display name" />
          <TextInput
            type="avatarUrl"
            placeholder="Optional: avatar image url"
          />
          <FormControlLabel
            labelPlacement="start"
            label={<Box sx={{ fontWeight: "bold" }}>Verified?</Box>}
            className="infoModal__verifiedWrapper"
            control={
              <Checkbox
                className="infoModal__verifiedCheckbox"
                onChange={(e) =>
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
            onClick={() => setShowModal(false)}
          >
            Start Tweeting!
          </Button>
        </form>
      </div>
    </div>
  );
}

export default InfoModal;
