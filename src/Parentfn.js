import React from 'react'
import Childfn from './Childfn'
function Parentfn(props) {
   const mainobj={
    name:"sana",
    class:"react"
   }
  return (
     
    <div>
        <h1>PARENT FUNCTION PROPS</h1>
        <Childfn name="devi" myownobj={mainobj} />
    </div>
  )
}

export default Parentfn