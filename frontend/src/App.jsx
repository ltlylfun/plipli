import "./App.css";
import TopBar from "./components/topBar/topBar";
import LeftBar from "./components/leftBar/leftBar";
import Gallery from "./components/gallery/gallery";

const App = () => {
  return (
    <div className="app">
      <LeftBar />
      <div className="main">
        <TopBar />
        <Gallery />
      </div>
    </div>
  );
};
export default App;
