import React, { Component } from 'react'

export class Count extends Component {
    constructor(props){
    super(props);
    this.state=
            {
                count :0
            };

    }
    countadd=()=>{
        this.setState({count:this.state.count+1});
    }
    countminus=()=>
    {
        this.setState({count:this.state.count-1});
    }
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
         <button type="button" onClick={this.countadd}>Add one</button>
         <button type="button" onClick={this.countminus}>Count Minus </button>
     
      </div>
    )
  }
}

export default Count