import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bucket: '',
    };

    this.loadBucket = this.loadBucket.bind(this);
  }

  loadBucket(e) {
    var bucket = e.target.getAttribute('data-target');
    this.setState({
      bucket: bucket,
    });
    this.props.loadBucket(bucket);
  }

  render() {

    return (
        <div className="sidebar">
          <div className="title">
            <h1>FLEX Toolkit</h1>
            <h2>A toolkit for classroom educators</h2>
          </div>
          <ul id="question1" className="sidenav">
            <li className="question">What is your focus today?</li>
            <li><a data-target="question2a" className="waves-effect sidenav-trigger sidenav-close" href="#!">Setting Norms In ICT Lessons</a></li>
            <li><a data-target="question2b" className="waves-effect sidenav-trigger sidenav-close" href="#!">Managing Device Usage</a></li>
            <li><a data-target="question2c" className="waves-effect sidenav-trigger sidenav-close" href="#!">Improving Teaching Engagement</a></li>
            <li><a data-target="question2d" className="waves-effect sidenav-trigger sidenav-close" href="#!">Enhancing Existing Lesson Content</a></li>
          </ul>
          <ul id="question2a" className="sidenav">
            <li className="question">How do you feel about ICT lessons currently?</li>
            <li><a data-target="bucket1" className="waves-effect sidenav-close" href="#!" onClick={this.loadBucket}>I'm not very comfortable using ICT in class - it feels overwhelming!.</a></li>
            <li><a data-target="bucket2" className="waves-effect sidenav-close" href="#!" onClick={this.loadBucket}>I'm comfortable in current ICT lessons, but how can I do better?</a></li>
            <li><a data-target="bucket3" className="waves-effect sidenav-close" href="#!" onClick={this.loadBucket}>Things are going really well! I want to do even more with ICT.</a></li>
          </ul>
          <ul id="question2b" className="sidenav">
            <li className="question">How are devices used in class?</li>
            <li><a data-target="bucket4" className="waves-effect sidenav-close" href="#!" onClick={this.loadBucket}>I'm the only person using a device in the classroom.</a></li>
            <li><a data-target="bucket5" className="waves-effect sidenav-close" href="#!" onClick={this.loadBucket}>Students are sharing devices, either in pairs or groups.</a></li>
            <li><a data-target="bucket6" className="waves-effect sidenav-close" href="#!" onClick={this.loadBucket}>There is one device for every student, whether school-provided or BYOD.</a></li>
          </ul>
          <ul id="question2c" className="sidenav">
            <li className="question">What is your objective/style?</li>
            <li><a data-target="bucket7" className="waves-effect sidenav-close" href="#!" onClick={this.loadBucket}>I want to monitor and manage the class while using ICT (to expand research).</a></li>
            <li><a data-target="bucket8" className="waves-effect sidenav-close" href="#!" onClick={this.loadBucket}>I want to engage students to drive research and derive definitions/content.</a></li>
          </ul>
          <ul id="question2d" className="sidenav">
            <li className="question">How do you want to improve on class content?</li>
            <li><a data-target="question2d1" className="waves-effect sidenav-trigger sidenav-close" href="#!" onClick={this.loadBucket}>Increase the variety/diversity of content.</a></li>
            <li><a data-target="bucket-11" className="waves-effect sidenav-close" href="#!" onClick={this.loadBucket}>Improve quality of content.</a></li>
          </ul>
          <ul id="question2d1" className="sidenav">
            <li className="question">Do students have access to devices in class?</li>
            <li><a data-target="bucket9" className="waves-effect sidenav-close" href="#!" onClick={this.loadBucket}>No.</a></li>
            <li><a data-target="bucket-10" className="waves-effect sidenav-close" href="#!" onClick={this.loadBucket}>Yes.</a></li>
          </ul>
           <a id="getstarted" href="#" data-target="question1" className="sidenav-trigger sidenav-close">Get Started</a>
        </div>
    );
  }
}
export default Sidebar;
