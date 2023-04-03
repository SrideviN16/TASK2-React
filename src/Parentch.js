import React, { Component } from 'react'
import Chilch from './Chilch';

export class Parentch extends Component {
  render() {
    return (
      <div>
         <h1>Welcome </h1>
        <Chilch name="sri" area="cherai" />
      </div>
    )
  }
}

export default Parentch