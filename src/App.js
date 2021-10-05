import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
    </div>
  );
}

export default App;
