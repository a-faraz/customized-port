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

      	  	<p>I grew up in Texas and attended the University of Houston, where I graduated with a Bachelors in Managment Information Systems.</p>

            <p>I took my first programming class in college and it was one of the hardest things I had to overcome. The challenge sparked a curiosity that would go on to create a passion for software development.</p>

            <p>Also while in college, I started my second company, a clothing line, where I handled everything from design, to marketing, to the e-commerce.</p>
            <p>After college, I worked as a Systems Analyst for a healthcare administration company. There I was responsible for three clients. I handled their employee benefits data and web applications.</p>
            <p>Coming from IT, I have worked hard to develop a solid understanding of computer programming funadamentals and best practices. Programming not only gives me pleasure and satisfaction but also represents a tool which I can use to help others.</p>
      	    <p>The idea of creating solutions for real world problems is my biggest motivation.</p>
	      </div>

	      <div className="repos">
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
