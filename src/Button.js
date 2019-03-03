import React, { Component } from 'react';

export default class Button extends Component {
  isOperator = (val) => {
    return (!isNaN(val) || val===".")
  };

  render() {
    return (
        <button
          id={this.props.id}
          name={this.props.name}
          className={`button ${this.isOperator(this.props.name)
          ? "" : "operator"}`}
          onClick={() => {this.props.handleClick(this.props.name)}}
          >
          {this.props.name}
        </button>
    );
  }
}