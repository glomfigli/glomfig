import { Login } from "./Login";
import { ConfigDisplay } from "./ConfigDisplay";
import { Home } from "./Home";
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom";

function App (): JSX.Element {
  return (
    <div>
    <Router>
    <div>
        <Link to="/">Home</Link> &nbsp;
        <Link to="/login">Login </Link> &nbsp;
        <Link to="/configs">Configs </Link> &nbsp;
    </div>
      <Routes>
        <Route path="/configs" element={<ConfigDisplay/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
      <div>
        </div>
      </div>
  );
}

export default App;
