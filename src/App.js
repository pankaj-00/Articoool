import "./App.css";
import Copyright from "./Components/copyright";
import Navbar from "./Components/navbar";

import Blogtiles from "./Components/Blogtilesedit";
import About from "./Components/About";
import Register from "./Components/Register";
import Login from "./Components/Login";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import WritePage from "./Components/WritePage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" element={<Blogtiles />} />

          <Route path="/Login" element={<Login />} />

          <Route path="/Register" element={<Register />} />

          <Route path="/About" element={<About />} />

          <Route path="/Write" element={<WritePage/>}/>
          
        </Switch>

        <Copyright />
      </Router>
    </AuthProvider>
  );
}

export default App;
