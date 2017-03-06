import React, { Component } from 'react';
import Banner from './layout/Banner';

class Home extends Component {

  constructor(props){
    super(props);
    this.eventToggleSidebar = this.eventToggleSidebar.bind(this)
  }

  eventToggleSidebar(e) {
    e.preventDefault();
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

      	<div className="posts">

  			<div className="post banner">
			    <h1 className="post-title">I build <em>web applications</em>, <em>mobile applications</em>, and <em>games</em> using JavaScript.</h1>
    			<p>I have worked in the <em> sports </em> industry, the <em>healthcare</em> industry, for a <em>non-profit</em>, and in a <em>start-up</em> environment. Find out more <a href="#" onClick={this.eventToggleSidebar}>about me.</a></p>

			</div>

		  	<div className="post clearfix">

				<h2>Technologies I build with:</h2>

				<div className="skill-item clearfix">
					<h4>Client Side JS</h4>
					<ul>
						<li><em>HTML5 / CSS3</em></li>
						<li><em>React</em></li>
						<li><em>Angular</em></li>
						<li><em>jQuery</em></li>
						<li><em>Ionic</em></li>
					</ul>
				</div>


				<div className="skill-item clearfix">
					<h4>Server Side JS</h4>
					<ul>
						<li><em>Node.js</em>
							<ul>
								<li><em>Express</em></li>
							</ul>
						</li>
						<li><em>MongoDB</em></li>
						<li><em>PostgreSQL</em></li>
						<li><em>SQL Server</em></li>
					</ul>
				</div>

				<div className="skill-item clearfix">
          <h4>Tools</h4>
          <ul className="clearfix">
            <li><em>REST API</em></li>
            <li><em>Webpack</em></li>
            <li><em>Gulp / Grunt</em></li>
            <li><em>Heroku</em></li>
          </ul>
				</div>

				<div className="skill-item clearfix">
          <h4>Testing</h4>
          <ul>
            <li><em>Mocha</em></li>
            <li><em>Jasmine</em></li>
            <li><em>Karma</em></li>
          </ul>
				</div>



  			</div>


  			<div className="post clearfix">


			</div>

			<Banner />

  		</div>

    );
  }
}

export default Home;
