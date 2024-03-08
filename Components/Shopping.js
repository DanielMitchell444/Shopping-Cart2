import React from "react";

const Shopping = ({data}) => {
 return(
 <div>
  {data.map(data => {
   return(
 <div class = "container2">
   <div class = "card">
    <div class = "productImage">
    <img src = {data.image} alt = {data.name} class = "images" />
    </div>
    <h3>{data.title}</h3>
    <p>${data.price}</p>
    <button 
    class = "adds"
    
    >Add to Cart</button>
   </div>
   </div>
   )
  })}
 </div>
 )
}

export default Shopping;