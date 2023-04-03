import React, { Component } from 'react'

export class Statech extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"sri",
            id:16,
        };
    }
  changeName=()=>
  {
    this.setState({name:"DEVI" , id:11});
  }
  render() {
    return (
      <div>
        <h2>{this.state.name }{this.state.id}</h2>;
        <button type="button" onClick={this.changeName}>CHANGE MY NAME</button>
      </div>
    )
  }
}

export default Statech