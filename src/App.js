
import './App.css';
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route exact path="home" element={<Home />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="signup" element={<SignUp />} />
        </Routes>
{/*         <div className="list">
          <ul>
            <li><Link to="home">Home</Link></li>
            <li><Link to="login">Login</Link></li>
            <li><Link to="signup">SignUp</Link></li>
          </ul>
        </div> */}
      </Router>
    </div>
  );
}

export default App;
