import React from 'react';
import { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <p>This is just a test.</p>
      </div>
    );
  }
}
