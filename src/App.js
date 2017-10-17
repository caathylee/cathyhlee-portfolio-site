import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Header(props) {
  return (
    <header className="App-header container">
      <div className="row">
        <ul className="nav">
          <li><a href="#">Home</a></li>
          <li><a href="#">Works</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Resume</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </header>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>&copy; {new Date().toLocaleTimeString} Designed & Developed by Cathy Lee. All Rights Reserved.</p>
    </footer>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="slider container">
          <div className="row">
            <h1 className="App-title">Cathy Lee</h1>
            <p className="tagline">Design-saavy Front-end Developer</p>
          </div>
        </div>
        <p className="App-intro">
        <img src={logo} className="App-logo" alt="logo" />
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer />
      </div>
    );
  }
}

export default App;
