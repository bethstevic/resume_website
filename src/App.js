import React, { PureComponent } from 'react';
import './App.scss';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a
            href="https://github.com/bethstevic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="App-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/beth-stevic/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="App-linkedin" />
          </a>
        </header>
        <div className="App-body">
          <h1>Hi!</h1>
          <h3>My name is</h3>
          <h1>Beth Stevic</h1>
        </div>
      </div >
    )
  }
}

export default App;
