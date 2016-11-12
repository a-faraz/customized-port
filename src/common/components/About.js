import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Repos from './about/Repos';

import Loader from './layout/Loader';
import Banner from './layout/Banner';

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReposIfNeeded();
  }

  render () {
    const { results, isFetching, lastUpdated, error } = this.props;
    return (
      <div>

      		<Banner />

      	  <div className="about">

      	  	<h3>About Me</h3>

      	  	<p>I grew up in Houston Texas and attended the University of Houston where I got my Bachelors in Managment Information Systems.</p> 

      	  	<p>During my college career, I enrolled in many programming and business classes. I was fortunate enough to partake in internships which required a variety of skills. </p>

            <p>At my first internship, as a Corporate Development Intern for the Houston Rockets, I learned to utilize my business and communication skills. 
            <br />My second internhip was with The Citizen's Foundation, where I utilized agile methodologies to develop software for a Non-Profit.</p>

      	  	<p>After graduating, I worked as a Business Analyst. I was working face to face with clients and handling finances for my branch.</p>
            <p>Meanwhile, I started my own company, a clothing line, where I handled everything from design, to marketing, to the e-commerce.</p>
            <p>Afterwards, I worked as an Applications Developer for a healthcare administration company, where I was responsible for three clients. I handled their employees' benefits data and web applications.</p>
      	 
	      </div>

	      <div className="repos">
        {/**
	      	<h3><a href="https://github.com/a-faraz?tab=repositories" target="_blank">My GitHub</a> Repos</h3>
	        {isFetching && results.length === 0 &&
	          	<Loader />
	        }
	        {!isFetching && error && results.length === 0 &&
	          <h3 className="post-error">There has been an Error</h3>
	        }
	        {!isFetching && !error && results.length === 0 &&
	          <h3>Empty</h3>
	        }
	        {results.length > 0 &&
	          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
	            <Repos results={results} />
	          </div>
	        }
      **/}
        </div>
      </div>
    );
  }
}

About.propTypes = {
  results: PropTypes.array.isRequired,
  error: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default About;