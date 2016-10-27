import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
    <div className="masthead">
			<div className="container">
			  <h3 className="masthead-title">
			    <a href="/" title="Home">Anjum Faraz</a>
			    <small>Full Stack Web Developer based in Houston, Tx</small>
			  </h3>
			</div>
		</div>
    );
  }
}

export default Header;