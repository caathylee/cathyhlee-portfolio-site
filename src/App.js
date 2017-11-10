import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Header(props) {
  return (
    <header className="App-header container">
      <div className="row">
        <ul className="nav">
          <li><a>Home</a></li>
          <li><a>Works</a></li>
          <li><a>Projects</a></li>
          <li><a>Resume</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
    </header>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>&copy; 2017 Designed & Developed by Cathy Lee. All Rights Reserved.</p>
    </footer>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container-fluid slider">
          <div className="row">
            <h1 className="App-title">Cathy Lee</h1>
            <p className="tagline">Design-saavy Front-end Developer</p>
          </div>
        </div>
        <div className="container about">
          <h2>Welcome</h2>
          <p>My name is Cathy Lee and I am a front-end developer based in Los Angeles county with an eye for design, appreciation for clean code and seamless UI/UX.</p>
        </div>
        <div className="container-fluid works">
          <h2>Works</h2>
          <p>Here are some of the websites I developed using Foundation framework, PHP, and SASS.</p>
          <a className="note-box s3-1" href="https://www.dinomd.com" target="_blank">
              <img src="image/s3-clients/dino-md.jpg" />
              <h3>Dino MD</h3>
          </a>
          <a className="note-box s3-2" href="https://www.newfaceny.com/" target="_blank">
              <h3>New Face NY</h3>
          </a>
          <a className="note-box s3-3" href="http://theroseclinic.com/" target="_blank">
              <h3>The Rose Clinic</h3>
          </a>
          <a className="note-box s3-4" href="https://www.drchristopherchang.com/" target="_blank">
              <h3>Dr. Christopher Chang</h3>
          </a>
          <a className="note-box s3-5" href="https://www.deltaqualityelectric.com/#" target="_blank">
              <h3>Delta Quality Electric</h3>
          </a>
          <a className="note-box s3-6" href="https://www.benjamineye.com" target="_blank">
              <h3>Benjamin Eye Institute</h3>
          </a>
          <a className="note-box s3-7" href="https://www.newjerseyspinesurgeon.com" target="_blank">
              <h3>Progressive Spine & Orthopaedics</h3>
          </a>
          <a className="note-box s3-8" href="https://www.marcmalekmd.com" target="_blank">
              <h3>Marc Malek MD</h3>
          </a>
          <a className="note-box s3-9" href="https://www.lookrefreshed.com/" target="_blank">
              <h3>Refreshed Aesthetic Surgery & Skincare</h3>
          </a>
          <a className="note-box s3-10" href="https://www.waringvision.com/" target="_blank">
            <h3>Waring Vision</h3>
          </a>
          <a className="note-box s3-11" href="http://www.hoefflinplasticsurgery.com/" target="_blank">
            <h3>Hoefflin Plastic Surgery</h3>
          </a>
          <a className="note-box s3-12" href="https://www.altairinstruments.com/" target="_blank">
            <h3>Altair Instruments</h3>
          </a>
        </div>
        <div className="container-fluid projects">
          <h2>Projects</h2>
          <p>Coming soon.</p>
        </div>
        <div className="container contact">
          <h2>Contact</h2>
          <p>Want to work together? Let's get in touch!</p>
          <a href="mailto:cathyhsianglee@gmail.com" className="btn">Message</a>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
