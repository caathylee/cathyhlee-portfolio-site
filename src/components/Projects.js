import React, { Component } from 'react';

class Projects extends Component {
	render() {
		return (
    	<div className="container-fluid projects" id="projects">
          <h2>Projects</h2>
          <p>New projects coming soon.</p>
          <div className="one-project">
            <h3>ShareCrow</h3>
            <p>Digital marketplace for users to rent and lend out items with payment security.</p>
            <p>Technologies used:</p>
            <p>Github link: </p>
            <img className="hr" src={require('./../images/hr-projects/sharecrow-1.jpeg')} />
            <img className="hr" src={require('./../images/hr-projects/sharecrow-2.jpeg')} />
          </div>
          <div className="one-project">
            <h3>Memowise</h3>
            <p>A customizable gamified flash card application.</p>
            <p>Technologies used:</p>
            <p>Github link: </p>
            <img className="hr" src={require('./../images/hr-projects/memowise.jpeg')} />
          </div>
          <div className="one-project">
            <h3>Read with Me</h3>
            <p>Application that enables parents to read interactively with children remotely.</p>
            <p>Technologies used:</p>
            <p>Github link: </p>
            <img className="hr" src={require('./../images/hr-projects/read-with-me.jpeg')} />
          </div>
      </div>
    	)
	}
}

export default Projects;