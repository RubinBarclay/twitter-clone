import { useState } from "react";
import { Box, Button, FormControlLabel, Checkbox } from "@material-ui/core";
import TextInput from "./TextInput/TextInput";
import "./InfoModal.css";

function InfoModal({ setShowModal }) {
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [verified, setVerified] = useState(false);

  return (
    <div className="infoModal">
      <div className="infoModal__wrapper">
        <h2 className="infoModal__heading">Create a temporary user</h2>
        <form className="infoModal__form">
          <TextInput
            text={username}
            setText={setUsername}
            placeholder="Username"
          />
          <TextInput
            text={displayName}
            setText={setDisplayName}
            placeholder="Display name"
          />
          <FormControlLabel
            labelPlacement="start"
            label={<Box sx={{ fontWeight: "bold" }}>Verified?</Box>}
            className="infoModal__verifiedWrapper"
            control={
              <Checkbox
                className="infoModal__verifiedCheckbox"
                onChange={() => setVerified(true)}
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
