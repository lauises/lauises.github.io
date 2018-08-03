import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Toggle from '../buttons/toggle.jsx';

const propTypes = {
  clickHandler: PropTypes.func.isRequired,
  text: PropTypes.string,
  phaseorder: PropTypes.string,
  active: PropTypes.bool,
};

const defaultProps = {
  phaseorder: 'pre',
};

class PhaseButton extends Component {
  render() {
    const { phaseorder } = this.props;
    return (
      <Toggle
        text = {phaseorder === 'pre' ? 'Sort Start > End' : 'Sort End > Start'}
        {...this.props}
      />
    );
  }
}

PhaseButton.propTypes = propTypes;
PhaseButton.defaultProps = defaultProps;

export default PhaseButton;
