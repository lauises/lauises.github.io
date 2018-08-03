import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Toggle from '../buttons/toggle.jsx';

const propTypes = {
  clickHandler: PropTypes.func.isRequired,
  text: PropTypes.string,
  order: PropTypes.string,
  phase: PropTypes.string,
  active: PropTypes.bool,
};

const defaultProps = {
  show: 'all',
};

class PhaseSelect extends Component {
  render() {
    const { text } = this.props;
    return (
      <Toggle
        text = { text }
        {...this.props}
      />
    );
  }
}

PhaseSelect.propTypes = propTypes;
PhaseSelect.defaultProps = defaultProps;

export default PhaseSelect;
