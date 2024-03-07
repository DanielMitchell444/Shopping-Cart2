import React from "react";
import Navbar from "./Navbar";
import video from '../Assets/pexels-atbo-245208.jpg'
const HomePage = () => {
  return(
  <div>
    <Navbar />
    <img class = "image" src = {video} />
  </div>
  )
}

export default HomePage