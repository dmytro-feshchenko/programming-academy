import { Component } from 'react';
import './CoursePreviewCard.css';

/**
 * Preview course card
 * Contains name, shorten description and progress of the learning
 */
export default class CoursePreviewCard extends Component {
  star () {

  }
  subscibe () {

  }

  constructor(props) {
    super(props);
    this.state = {
      completed: null
    }
  }

  render() {
    return (
      <div className="col-sm-12">
        <div className="panel panel-default">
          <div className="panel-heading">{this.props.course.name}</div>
          <div className="panel-body">
            {this.props.course.description}
          </div>
          <div className="panel-footer">
            <a onClick={this.star} className="btn btn-default">
              <span className="glyphicon glyphicon-star"></span>
            </a>
            <a onClick={this.subscibe} className="btn btn-default pull-right">
              <span className="glyphicon glyphicon-envelope"></span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
