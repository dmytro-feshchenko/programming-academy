import React from 'react';
import CoursePreviewCard from './CoursePreviewCard';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [
        {
          id: '123',
          title: 'My little course',
          description: 'Quickly promote alternative processes before fully tested synergy. Professionally incentivize 24/365 products for accurate partnerships.',
          count_lessons: 10
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <h1>Home page</h1>
        <div className="courses-list">
          {this.state.courses.map(function(course, i) {
            return <CoursePreviewCard key={i} course={course} />
          })}
        </div>
      </div>
    );
  }
}

export default Home;
