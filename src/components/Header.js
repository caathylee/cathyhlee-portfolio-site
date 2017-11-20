import React, { Component } from 'react';

function handleClick(e) {
		e.preventDefault();
		alert("This link was clicked.");
	}
class Header extends Component {
	render() {
		return (
		    <header>
		    	<nav className="navbar navbar-inverse">
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>                        
				      </button>
				      <a className="navbar-brand" href="#">Cathy Lee</a>
				    </div>
				    <div className="collapse navbar-collapse" id="myNavbar">
				      <ul className="nav navbar-nav">
				        <li><a href="#" onClick={handleClick}>Works</a></li>
				        <li><a href="#" onClick={handleClick}>Projects</a></li>
				        <li><a href="#" onClick={handleClick}>Resume</a></li>
				        <li><a href="#" onClick={handleClick}>Contact</a></li>
				      </ul>
				    </div>
				  </div>
				</nav>
		    </header>
    	)
	}
}

export default Header;