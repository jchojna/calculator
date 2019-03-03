import React, { Component } from 'react';

export default class Display extends Component {
  render() {
    return (
      <div id="display">
        <div id="aggr">
          {this.props.aggr}
        </div>
        <div id="display-all">
          {this.props.display}
        </div>
        <div id="current">
          {this.props.current}
        </div>
      </div>
    );
  }
}