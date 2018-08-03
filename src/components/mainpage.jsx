import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Sidebar from '../components/Sidebar';
import CardSection from '../components/CardSection';

const propTypes = {
  bucket: PropTypes.string,
};

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bucket: '',
    };
    this.receiveBucket = this.receiveBucket.bind(this);
  }

  receiveBucket(bucket) {
    this.setState({
      bucket: bucket,
    });
    this.child.bucketSelect(bucket);
  }

  render() {
    const { bucket } = this.props;
    return (
      <div className="contain">
        <Sidebar loadBucket={this.receiveBucket} />
        {/* <Intro /> */}
        {/* <CardSection bucketSelected={this.state.bucket} /> */}
        <CardSection bucketSelected={this.state.bucket} ref={instance => { this.child = instance }} />


        {/* <ClassCard /> */}

      </div>
    );
  }
}

MainPage.propTypes = propTypes;

export default MainPage;
