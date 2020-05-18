import React from 'react';
import logo from './logo.svg';
import './App.css';

import { format } from 'date-fns'
// import format from 'date-fns/format'
import { ru } from 'date-fns/locale'
// import ru from 'date-fns/locale/ru'

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
        <p>
          {format(new Date(2014, 1, 11), 'd MMMM yyyy', { locale: ru })}
        </p>
      </header>
    </div>
  );
}

export default App;
