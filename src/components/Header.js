import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
    	   <header className="container">
      			<div className="row">
	        		<ul className="nav">
			          <li><a hrefs="works">Works</a></li>
			          <li><a href="projects">Projects</a></li>
			          <li><a>Resume</a></li>
			          <li><a href="contact">Contact</a></li>
	        		</ul>
      			</div>
			</header>
    	)
	}
}

export default Header;