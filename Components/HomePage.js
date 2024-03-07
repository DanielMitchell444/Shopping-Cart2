import React from "react";
import Navbar from "./Navbar";
import video from '../Assets/Doge.mp4'
const HomePage = () => {
  return(
  <div>
    <Navbar />
    <video id="background-video" autoplay autostart loop muted> 
      <source src = {video} type = "video/mp4" />
      <h1>Hello</h1>
      </video>
  </div>
  )
}

export default HomePage