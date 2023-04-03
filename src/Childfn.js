import React from 'react'
import Nestedchildfn from './Nestedchildfn'

function Childfn(props) {
   const obj={
     tamil:"first",
     english:"second",
   }
  return (
    <div>
        <h1>Name:{props.name}</h1>
        <h2>object name:{props.myownobj.name}</h2>
        <Nestedchildfn area="cherai" myon={obj}/ >
    </div>
  )
}

export default Childfn