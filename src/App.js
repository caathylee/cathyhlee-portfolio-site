import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Works from './components/Works';
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
        <ThreeColoredLine />
        <div className="container-fluid projects" id="projects">
          <h2>Projects</h2>
          <p>Coming soon.</p>
        </div>
        <div className="about" id="about">
          <div className="container">
            <img src={require('./images/cathylee.jpg')} />
            <div className="text">
              <h2>About Cathy Lee</h2>
              <p>Cathy Lee is a user-driven web developer that is passionate about creating seamless user interface and experience with a robust and modular application design. She can work autonomously, but thrives in team environments and believes version control as a necessity for efficiency. She currently resides in Los Angeles, California with her two pups. A few technologies she's proficient with include HTML, SASS, JavaScript, jQuery, React, Foundation, Node, Express, PHP, MongoDB, mySQL, and Git.</p>
            </div>
          </div>
        </div>
        <ThreeColoredLine />
        <div className="container contact" id="contact">
          <h2>Contact</h2>
          <p>Want to work together? Let's get in touch!</p>
          <ul className="socials">
            <li><a href="https://bitbucket.org/caathylee/" target="_blank"><img className="icon" src={require('./images/icon-bitbucket.jpg')} /></a></li>
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
