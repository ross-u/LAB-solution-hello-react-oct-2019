import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>My Component</h1>
        <p>Welcome to {this.props.city}</p>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default MyComponent;
