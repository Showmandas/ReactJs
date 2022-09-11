import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.parentgreet}>Greet Your Parents</button>
      </div>
    )
  }
}
