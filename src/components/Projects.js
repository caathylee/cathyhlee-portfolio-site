import React, { Component } from 'react';

class Projects extends Component {
	render() {
		return (
    	<div className="container-fluid projects" id="projects">
          <div className="container-fluid personal-projects">
            <h2>Projects</h2>
            <p>New personal projects coming soon.</p>
          </div>

          <p className="disclaimer">Below are school projects Cathy worked on in 2016.</p>
          <div className="one-project">
            <h3>ShareCrow</h3>
            <p>Digital marketplace for users to rent and lend out items with payment security.</p>
            <p>Technologies: React, Redux, Webpack, Node, Express, Postgres, Redis, AWS S3, Google Maps API, Google Geolocation API, Twilio API, Stripe API, SASS</p>
            <a className="btn" href="https://github.com/jaquire/share_crow" target="_blank">View on Github</a>
            <img className="hr" src={require('./../images/hr-projects/sharecrow-landing.png')} />
            <img className="hr" src={require('./../images/hr-projects/sharecrow-marketplace.png')} />
          </div>
          <div className="one-project">
            <h3>Memowise</h3>
            <p>A customizable gamified flash card application.</p>
            <p>Technologies: React, Redux, Node, Express, Postgres</p>
            <a className="btn" href="https://github.com/AgreeableZombie/Memowise" target="_blank">View on Github</a>
            <img className="hr" src={require('./../images/hr-projects/memowise.png')} />
          </div>
          <div className="one-project">
            <h3>Read with Me</h3>
            <p>Application that enables parents to read interactively with children remotely.</p>
            <p>Technologies: React, Webpack, Node, Express, Twilio, MongoDB</p>
            <a className="btn" href="https://github.com/AgreeableZombie/AgreeableZombie" target="_blank">View on Github</a>
            <img className="hr" src={require('./../images/hr-projects/read-with-me.png')} />
          </div>
          <div className="one-project">
            <h3>TsumTsum Typing</h3>
            <p>Application that delivers a playful approach to typing practice.</p>
            <p>Technologies: Angular, Node, Express, MongoDB</p>
            <img className="hr" src={require('./../images/hr-projects/tsumtsumtyping.png')} />
          </div>
      </div>
    	)
	}
}

export default Projects;