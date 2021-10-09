import { Button } from "@material-ui/core";
import { useState } from "react";
import "./InfoModal.css";

function InfoModal({ setShowModal }) {
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");

  return (
    <div className="infoModal">
      <h2>Create a temporary user</h2>
      <form>
        <label htmlFor="username">
          <div className="signUp__inputGroup">
            <span className="signUp__inputGroup__placeholder">Username</span>
            {/*
            <span className="signUp__inputGroup__counter">{username.length} / 20</span>
            <input
              type="text"
              id="username"
              maxlength="20"
              onChange={(e) => setUsername(e.target.value)}
            />
            */}
          </div>
        </label>
        {/*
        <div className="signUp__inputGroup">
          <label htmlFor="displayName">Display name</label>
          <input type="text" id="displayName" placeholder="unicornLover89" />
        </div>
        <div className="signUp__inputGroup">
          <label htmlFor="avatarPicture">Avatar picture</label>
          <input
            type="text"
            id="avatarImage"
            placeholder="Optional: Enter image URL"
          />
        </div>
        <div className="createUser__radioWrapper">
          <label>Verified?</label>
          <label htmlFor="yes">Yes</label>
          <input type="radio" name="verified" id="yes" value="yes" />
          <label htmlFor="no">No</label>
          <input type="radio" name="verified" id="no" value="no" />
        </div>
        */}
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
  );
}

export default InfoModal;
