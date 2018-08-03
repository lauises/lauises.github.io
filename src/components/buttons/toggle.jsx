import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Button, Icon} from 'react-materialize';

export default class Toggle extends Component {
  render() {
    const { clickHandler, text } = this.props;

    return (
      <Button waves='light' onClick={clickHandler}>{text}</Button>
    );
  }
}
