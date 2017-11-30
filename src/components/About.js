import React, { Component } from 'react';

class About extends Component {
	render() {
		return (
    	<div id="about">
          <div className="container">
            <img src={require('./../images/cathylee.jpg')} />
            <div className="text">
              <h2>About Cathy Lee</h2>
              <p>Cathy Lee is a user-driven web developer that is passionate about creating seamless user interface and experience with a robust and modular application design. She can work autonomously, but thrives in team environments and believes version control as a necessity for efficiency. She currently resides in Los Angeles, California with her two pups. A few technologies she's proficient with include HTML, SASS, JavaScript, jQuery, React, Foundation, Node, Express, PHP, MongoDB, mySQL, and Git.</p>
            </div>
          </div>
        </div>
    	)
	}
}

export default About;