import "./App.css";
import Copyright from "./Components/copyright";
import Navbar from "./Components/navbar";

import Blogtiles from "./Components/Blogtiles";
import About from "./Components/About";
import Register from "./Components/Register";
import Login from "./Components/Login";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  const user = false;
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" element={<Blogtiles />} />
        </Switch>

        <Switch>
          <Route path="/Login" element={<Login />} />
        </Switch>

        <Switch>
          <Route path="/Register" element={<Register />} />
        </Switch>

        <Switch>
          <Route path="/About" element={<About />} />
        </Switch>

        <Copyright />
      </Router>
    </AuthProvider>
  );
}

export default App;
