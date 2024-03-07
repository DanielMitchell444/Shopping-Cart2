import React from "react";

const Shopping = (props) => {
   const [name] = props.data
 return(
 <div>
    {props.data.map(data => {
      <h1>{name}</h1>
    })}
 </div>
 )
}

export default Shopping;