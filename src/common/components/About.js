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

      	  	<p>I grew up in Houston Texas and attended the University of Houston, where I graduated with a Bachelors in Managment Information Systems.</p>

            <p>From helping schools in the village where I was born to spending hours in the Senior Living Home by my house in Houston, I was fortunate enough to partake in various programs that helped me become the person I am today.</p>

            <p>Taking my first programming class in college was one of the hardest things I had to overcome. The challenge sparked an interest that would go on to create a fiery passion for software development.</p>

      	  	<p>After graduating, I worked as a Business Analyst. I was working face to face with clients and handling finances for my branch.</p>
            <p>Meanwhile, I started my second company, a clothing line, where I handled everything from design, to marketing, to the e-commerce.</p>
            <p>Afterwards, I worked as a Systems Analyst for a healthcare administration company, where I was responsible for three clients. I handled their employee benefits data and web applications.</p>
            <p>I am passionate about software development because it not only gives me the chance to express my creativity but also represents a tool which I can use to help others.</p>
      	    <p>The idea of creating solutions for real world problems is my biggest motivation right after making my parents proud.</p>
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
