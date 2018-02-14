import React, { Component } from 'react';
import $ from 'jquery';

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $("header").addClass("scrolled");
    } else {
		$("header").removeClass("scrolled");
	}
});

class Header extends Component {
	render() {
		return (
		    <header>
		    	<nav className="navbar navbar-inverse">
				  <div className="container-fluid">
				    <div className="navbar-header">
				      {/*<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>                        
				      </button>*/}
				      <a className="navbar-brand" href="#">Cathy Lee</a>
				    </div>
				    <div className="collapse navbar-collapse" id="myNavbar">
				      <ul className="nav navbar-nav">
				        <li><a href="#works">Works</a></li>
				        <li><a href="#projects">Projects</a></li>
				        <li><a href="#about">About</a></li>
				        <li><a href="#contact">Contact</a></li>
				      </ul>
				    </div>
				  </div>
				</nav>
		    </header>
    	)
	}
}

export default Header;