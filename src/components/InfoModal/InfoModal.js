import { useContext, useEffect } from "react";
import { Box, Button, FormControlLabel, Checkbox } from "@material-ui/core";
import TextInput from "./TextInput/TextInput";
import "./InfoModal.css";
import UserInfoContext from "../../userInfoContext";

function InfoModal({ setShowModal }) {
  // const [username, setUsername] = useState("");
  // const [displayName, setDisplayName] = useState("");
  // const [verified, setVerified] = useState(false);

  const { userInfo, setUserInfo } = useContext(UserInfoContext);

  const updateInfo = (infoObject) => {
    setUserInfo((currentInfo) => ({ ...infoObject, ...currentInfo }));
  };

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  return (
    <div className="infoModal">
      <div className="infoModal__wrapper">
        <h2 className="infoModal__heading">Create a temporary user</h2>
        <form className="infoModal__form">
          <TextInput
            text={userInfo.username}
            setText={updateInfo}
            placeholder="Username"
          />
          <TextInput
            text={userInfo.displayName}
            setText={updateInfo}
            placeholder="Display name"
          />
          <FormControlLabel
            labelPlacement="start"
            label={<Box sx={{ fontWeight: "bold" }}>Verified?</Box>}
            className="infoModal__verifiedWrapper"
            control={
              <Checkbox
                className="infoModal__verifiedCheckbox"
                onChange={(e) => updateInfo("verified", e.target.value)}
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
