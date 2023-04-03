import React, { Component } from 'react'
import Nestch from './Nestch' 

export class Chilch extends Component {
     
  render() {
    const classobj= {
      classname:"mine",
    }
    return (
      
      <div>
        <h1>Name:{this.props.name}</h1>
        <h2>Area:{this.props.area}</h2>
        <Nestch today="thuday" classobj={classobj}/>
      </div>
    )
  }
}

export default Chilch