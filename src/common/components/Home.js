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
    			<p>I have worked in the <em> sports </em> industry, the <em>healthcare</em> industry, for a <em>non-profit</em>, and at a <em>start-up</em>. Find out more about my experience in <a href="#" onClick={this.eventToggleSidebar}> business and design.</a></p>

			</div>
  
		  	<div className="post clearfix">

				<h2>Technologies I build with:</h2>

				<div className="skill-item clearfix">
					<h4>Client Side JS</h4>
					<ul className="">
						<li><em><b></b>React</em>
							<ul>
								<li><em><b></b>Redux</em></li>
							</ul>
						</li>
						<li><em>Angular</em></li>
						<li><em>Mithril</em></li>
					</ul>
				</div>


				<div className="skill-item clearfix">
					<h4>Server Side JS</h4>
					<ul>
						<li><em><b></b>Node</em>
							<ul>
								<li><em><b></b>Express</em></li>
							</ul>
						</li>
						<li><em><b></b>MongoDB</em></li>
						<li><em><b></b>PostgreSQL</em></li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Testing</h4>
					<ul>
						<li><em>Karma</em></li>
						<li><em>Mocha</em></li>
						<li><em>Jasmine</em></li>
						<li><em>Chai</em></li>
					</ul>
				</div>

				<div className="skill-item clearfix">
					<h4>Deployment</h4>
					<ul className="clearfix">
						<li><em><b></b>Heroku</em></li>
						<li><em>AWS</em></li>
						<li><em>Gulp</em></li>
						<li><em><b></b>Webpack</em></li>
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