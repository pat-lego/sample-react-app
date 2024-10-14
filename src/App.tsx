import logo from './assets/logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { header, HeaderContext } from './components/Header/HeaderContext';

function App() {
  return (
    <div className="App">
      <HeaderContext.Provider value={header}>
        <Header title="Documentation"></Header>
      </HeaderContext.Provider>

      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}


export default App;
