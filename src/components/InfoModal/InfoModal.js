import { Button } from "@material-ui/core";
import TextInput from "./TextInput/TextInput";
import "./InfoModal.css";

function InfoModal({ setShowModal }) {
  return (
    <div className="infoModal">
      <div className="infoModal__wrapper">
        <h2 className="infoModal__heading">Create a temporary user</h2>
        <form className="infoModal__form">
          <TextInput />
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
    </div>
  );
}

export default InfoModal;
