import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
    	<footer>
      		<p>&copy; {new Date().getFullYear()} Designed & Developed by Cathy Lee using React, Bootstrap, & SASS. All Rights Reserved.</p>
    	</footer>
    	)
	}
}

export default Footer;