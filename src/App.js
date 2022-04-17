import logo from './logo.svg';
import './App.css';

import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <nav>
          <ul id='PomoApp'>
            <li>
              <Link to="/index">PomoApp</Link>
            </li>
          </ul>
        </nav> */}
      </header>
    </div>
  );
}

export default App;
