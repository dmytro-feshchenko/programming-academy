import React from 'react';
import './Landing.css';

/**
 * Landing page with main features
 */
class Landing extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="col-xs-12 jumbotron text-center">
          <h1>Brainly online learning platform</h1>
          <p>Hello, it's simple home page for my site!</p>
          <a className="btn btn-primary btn-lg btn-login">Sign In</a>
        </div>
      </div>
    );
  }
}

export default Landing;
