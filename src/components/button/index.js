import React, { Component } from "react";
import PropTypes from "prop-types";

class SharedButton extends Component {
  submitEvent() {
    if (this.props.emitEvent) {
      this.props.emitEvent();
    }
  }

  render() {
    //get the props from App.js when this component is called
    const { buttonText } = this.props;

    return (
      <button onClick={() => this.submitEvent()} data-test="buttonComponent">
        {buttonText}
      </button>
    );
  }
}
//The component expects two different properties
SharedButton.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func
};

export default SharedButton;
