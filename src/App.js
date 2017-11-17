import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
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
            </div>
          </div>
        </div>
        <ThreeColoredLine />
        <div className="container-fluid works" id="works">
          <h2>Works</h2>
          <p>Here are some of the websites I developed using Foundation framework, PHP, and SASS.</p>
          <a className="note-box s3-1" href="https://www.dinomd.com" target="_blank">
              <div>
                <img className="logo" src={require('./images/s3-clients/logos/logo-dino.png')} alt="Dino MD" />
              </div>
          </a>
          <a className="note-box s3-2" href="https://www.newfaceny.com/" target="_blank">
              <div>
                <img className="logo" src={require('./images/s3-clients/logos/logo-newfaceny.png')} alt="New Face NY" />
              </div>
          </a>
          <a className="note-box s3-3" href="http://theroseclinic.com/" target="_blank">
              <div>
                <img className="logo" src={require('./images/s3-clients/logos/logo-theroseclinic.png')} alt="The Rose Clinic" />
              </div>
          </a>
          <a className="note-box s3-4" href="https://www.drchristopherchang.com/" target="_blank">
              <div>
                <img className="logo" src={require('./images/s3-clients/logos/logo-christopherchang.png')} alt="Dr. Christopher Chang" />
              </div>
          </a>
          <a className="note-box s3-5" href="https://www.deltaqualityelectric.com/#" target="_blank">
              <div>
                <img className="logo" src={require('./images/s3-clients/logos/logo-dino.png')} alt="Delta Quality Electric" />
              </div>
          </a>
          <a className="note-box s3-6" href="https://www.benjamineye.com" target="_blank">
              <div>
                <img className="logo" src={require('./images/s3-clients/logos/logo-benjamineye.png')} alt="Benjamin Eye Institute" />
              </div>
          </a>
          <a className="note-box s3-7" href="https://www.newjerseyspinesurgeon.com" target="_blank">
              <div>
                <img className="logo" src={require('./images/s3-clients/logos/logo-progressivespine.png')} alt="New Jersey Spine Surgeon" />
              </div>
          </a>
          <a className="note-box s3-8" href="https://www.marcmalekmd.com" target="_blank">
              <div>
                <img className="logo" src={require('./images/s3-clients/logos/logo-marcmalek.png')} alt="Marc Malek MD" />
              </div>
          </a>
          <a className="note-box s3-9" href="https://www.lookrefreshed.com/" target="_blank">
              <div>
                <img className="logo" src={require('./images/s3-clients/logos/logo-refreshed.png')} alt="Refreshed Aesthetic Surgery & Skincare" />
              </div>
          </a>
          <a className="note-box s3-10" href="https://www.waringvision.com/" target="_blank">
            <div>
              <img className="logo" src={require('./images/s3-clients/logos/logo-waring-vision.png')} alt="Waring Vision" />
            </div>
          </a>
          <a className="note-box s3-11" href="http://www.hoefflinplasticsurgery.com/" target="_blank">
            <div>
              <img className="logo" src={require('./images/s3-clients/logos/logo-hoefflin.png')} alt="Hoefflin Plastic Surgery" />
            </div>
          </a>
          <a className="note-box s3-12" href="https://www.altairinstruments.com/" target="_blank">
            <div>
              <img className="logo" src={require('./images/s3-clients/logos/logo-altair.png')} alt="Altair Instruments" />
            </div>
          </a>
        </div>
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
