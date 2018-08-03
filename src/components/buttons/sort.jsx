import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Toggle from '../buttons/toggle.jsx';

const propTypes = {
  clickHandler: PropTypes.func.isRequired,
  text: PropTypes.string,
  order: PropTypes.string,
  active: PropTypes.bool,
};

const defaultProps = {
  order: 'asc',
};

class SortButton extends Component {
  render() {
    const { order } = this.props;
    return (
      <Toggle
        text = {order === 'asc' ? 'Sort A > Z' : 'Sort Z > A'}
        {...this.props}
      />
    );
  }
}

SortButton.propTypes = propTypes;
SortButton.defaultProps = defaultProps;

export default SortButton;
