import React, { Component } from 'react';

class About extends Component {
	render() {
		return (
    	<div id="about">
          <div className="container">
            <img src={require('./../images/cathylee.jpg')} />
            <div className="text">
              <h2>About Cathy Lee</h2>
              <p>My interest in coding started with my marketing career. I was put in roles where I had to figure out WordPress and DreamWeaver by myself and create webpages. However, I always wanted to learn how to do websites from scratch. After leaving my marketing job, I helped a startup design and develop their company website, attended Hack Reactor to further my developer skills, and designed responsive websites at an internet marketing company and website design agency. I'm currently searching for a new role as either a Front End or Full Stack Developer that challenges me and furthers my coding skills. I code in React, JavaScript, Bootstrap, have experience in responsive web design and am a wiz at CSS/SASS.</p>
            </div>
          </div>
        </div>
    	)
	}
}

export default About;