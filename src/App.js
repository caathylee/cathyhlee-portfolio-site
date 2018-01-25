import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Works from './components/Works';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ThreeColoredLine from './components/ThreeColoredLine';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;
const bootstrap = require('bootstrap');


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container-fluid slider">
          <div className="row">
            <div className="text">
              <h1>Cathy Lee</h1>
              <p className="tagline">Design-saavy Front-end Developer</p>
              {/* <img src={require('./images/s3-clients/s3-1.jpg')} />  */}
            </div>
          </div>
        </div>
        <ThreeColoredLine />
        <Works />
        <Projects />
        <About />
        <ThreeColoredLine />
        <div className="container contact" id="contact">
          <h2>Contact</h2>
          <p>Want to work together? Let's get in touch!</p>
          <ul className="socials">
            <li><a href="mailto:cathyhsianglee@gmail.com" target="_blank"><img className="icon" src={require('./images/icon-email.png')} /></a></li>
            <li><a href="https://github.com/caathylee" target="_blank"><img className="icon" src={require('./images/icon-github.jpg')} /></a></li>
            <li><a href="https://www.linkedin.com/in/cathyhsianglee" target="_blank"><img className="icon" src={require('./images/icon-linkedin.png')} /></a></li>
          </ul>
          <div className="clearfix"></div>
          <a href="mailto:cathyhsianglee@gmail.com" className="btn">Message</a>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
