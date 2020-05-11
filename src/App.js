import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button.jsx'

function App() {
  return (
    <div className="App">
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
        <br/>
        <Button>Button</Button>
        <br/>
        <Button isSecondary>Secondary</Button>
        <br/>
        <input/>
      </header>
    </div>
  );
}

export default App;
