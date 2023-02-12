import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Component/Navbar'
import Wakaf from './Pages/Wakaf'
import Footer from "./Component/Footer"
import Frm from "./Pages/form"
import Landing from "./Pages/chatgpt"
import Accordion from "./Pages/Accordion_Wakaf"

function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    //<div id="particles-js"></div>
    //<Header />
    <Landing />
  );
}

export default App;
