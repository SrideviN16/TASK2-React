import React, { Component } from 'react'

export class Nestch extends Component {
  render() {
    return (
      <div>
        <h1>Today:{this.props.today}</h1>
        <h2>Classname:{this.props.classobj.classname}</h2>
      </div>
    )
  }
}

export default Nestch