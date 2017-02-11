import { Component } from 'react';
import { CoursePreviewCard } from './CoursePreviewCard';

export default class LoggedIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profile: null,
      courses: null
    }
  }
  render () {
    if (this.state.profile) {
      return (
        <div className="col-lg-12">
          <span className="pull-right">{this.state.profile.nickname} <a onClick={this.logout}>Log out</a></span>
          <h2>Welcome to Brainly - the best online learning platform!</h2>
          <p>You have subscribed to this courses:</p>
          {this.state.courses.map(function(course, i) {
            return <CoursePreviewCard key={i} course={course} />
          })}
        </div>
      );
    } else {
      return (<div>Loading...</div>);
    }
  }
}
