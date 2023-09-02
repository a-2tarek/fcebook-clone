import LeftBar from "./components/LeftBar";
import "./App.css";
import NavBar from "./components/NavBar";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="main">
      <NavBar />
      <div className="home">
        <LeftBar />
        <Posts />
      </div>
    </div>
  );
}

export default App;
