import React from 'react'

function Nestedchildfn(props) {
  return (
    <div>
        <h2>Area:{props.area}</h2>
        <h3>Object:{props.myon.tamil}</h3>
    </div>
  )
}

export default Nestedchildfn