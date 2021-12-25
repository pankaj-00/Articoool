import "./App.css";
import Copyright from "./Components/copyright";
import Navbar from "./Components/navbar";
import Blogtiles from "./Components/Blogtiles";
function App() {
  return (
    <div className="ContainerM">
      <Navbar />
      <Copyright />
      <Blogtiles />
    </div>
  );
}

export default App;
