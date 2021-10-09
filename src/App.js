import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widgets/Widgets";
import InfoModal from "./components/InfoModal/InfoModal";
import Backdrop from "./components/Backdrop/Backdrop";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(true);
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
      {showModal && (
        <>
          <InfoModal setShowModal={setShowModal} />
          <Backdrop />
        </>
      )}
    </div>
  );
}

export default App;
