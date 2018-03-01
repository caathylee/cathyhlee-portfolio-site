import React, { Component } from 'react';

class Projects extends Component {
	render() {
		return (
    	<div className="container-fluid projects" id="projects">
          <div className="container-fluid personal-projects">
            <h2>Current Projects</h2>
            <p className="disclaimer">Below are projects Cathy is currently working on.</p>
            
            <div className="one-project">
              <h3>React Typing Game (WIP)</h3>
              <p>Typing game tracking user's words per minute.</p>
              <p>Technologies: React, HTML5, CSS3/SASS, JavaScript, Webpack</p>
              <a className="btn" href="https://react-typing-game.herokuapp.com/" target="_blank">View Demo</a>
              <a className="btn" href="https://github.com/caathylee/typing-game-react" target="_blank">View on Github</a>
              <div className="clearfix"></div>
              <a className="img-wrapper" href="https://react-typing-game.herokuapp.com/" target="_blank">
                <img className="hr" src={require('./../images/hr-projects/react-typing-game.png')} />
              </a>
            </div>
          </div>

          <div className="container-fluid school-projects">
            <h2>Past Projects</h2>
            <p className="disclaimer">Below are school projects Cathy worked on in 2016.</p>
            <div className="one-project">
              <h3>ShareCrow</h3>
              <p>Digital marketplace for users to rent and lend out items with payment security.</p>
              <p>Technologies: React, Redux, JavaScript, Webpack, Node, Express, Postgres, Redis, AWS S3, Google Maps API, Google Geolocation API, Twilio API, Stripe API, SASS, Bootstrap</p>
              <a className="btn" href="https://github.com/jaquire/share_crow" target="_blank">View on Github</a>
              <img className="hr" src={require('./../images/hr-projects/sharecrow-landing.png')} />
              <img className="hr" src={require('./../images/hr-projects/sharecrow-marketplace.png')} />
            </div>
            <div className="one-project">
              <h3>Memowise</h3>
              <p>A customizable gamified flash card application.</p>
              <p>Technologies: React, Redux, JavaScript, Node, Express, Postgres, Material Design</p>
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
          </div>
      </div>
    	)
	}
}

export default Projects;